import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

import { ErrorsService, IErrorToSend } from './errors.service';
import { StorageService } from '../storage/storage.service';
import { DevModeService } from '../devMode/dev-mode.service';

describe('ErrorsService', () => {
  let errorsService: ErrorsService;
  let storageService: jasmine.SpyObj<StorageService>;
  let devModeService: jasmine.SpyObj<DevModeService>;

  const MOCK_ERROR_MSG: string = 'this is an error';
  const MOCK_ERROR_RESPONSE: HttpErrorResponse = new HttpErrorResponse({
    error: {
      Errors: [
        {
          ErrorMessage: MOCK_ERROR_MSG
        }
      ],
      message: 'Http failure response for http://localhost:4200/api/auth: 409 0',
      name: 'HttpErrorResponse',
      ok: false,
    },
    status: 409,
    statusText: '0',
    url: 'http://localhost:4200/api/auth',
  });

  let expectedResult: IErrorToSend;

  beforeEach(() => {
    expectedResult = {
      id: "null-",
      message: "Http failure response for http://localhost:4200/api/auth: 409 0",
      name: "HttpErrorResponse",
      stack: null,
      status: 409,
      time: 1556109299453,
      url: "/?pos_id=6285",
      user: null
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LocationStrategy,
        {
          provide: StorageService,
          useValue: jasmine.createSpyObj('StorageService', [
            'getUserId',
            'storeError'
          ]),
        },
        {
          provide: DevModeService,
          useValue: jasmine.createSpyObj('DevModeService', [
            'isDevMode'
          ]),
        },
      ]
    });

    storageService = TestBed.get(StorageService);
    devModeService = TestBed.get(DevModeService);
    errorsService = TestBed.get(ErrorsService);
  });

  it('should be created', () => {
    expect(errorsService)
      .toBeTruthy();
  });

  describe('shoud add context info for different error messages', () => {
    it('login error example', () => {
      storageService.getUserId
        .and
        .returnValue(null);
      devModeService.isDevMode
        .and
        .returnValue(true);

      const errToSend: IErrorToSend = errorsService
        .addContextInfo(MOCK_ERROR_RESPONSE);

      expect(errToSend.id)
        .toContain(expectedResult.id);
      expect(errToSend.name)
        .toEqual(expectedResult.name);
      expect(errToSend.status)
        .toEqual(expectedResult.status);
      expect(errToSend.user)
        .toEqual(expectedResult.user);
    });
  });

  describe('should check logging', () => {
    it('should not show in the console', () => {
      spyOn(console, 'error')
        .and
        .callThrough();
      spyOn(errorsService, 'addContextInfo')
        .and
        .callThrough();
      storageService.storeError
        .and
        .callThrough();

      errorsService.log(MOCK_ERROR_RESPONSE);
      expect(console.error)
        .not
        .toHaveBeenCalled();
      expect(errorsService.addContextInfo)
        .toHaveBeenCalled();
      expect(errorsService.addContextInfo)
        .toHaveBeenCalledWith(MOCK_ERROR_RESPONSE);
      expect(storageService.storeError)
        .toHaveBeenCalled();
    });

    it('should show in the console', () => {
      spyOn(console, 'error')
        .and
        .callThrough();
      spyOn(errorsService, 'addContextInfo')
        .and
        .callThrough();
      storageService.storeError
        .and
        .callThrough();
      devModeService.isDevMode
        .and
        .returnValue(true);

      errorsService.log(MOCK_ERROR_RESPONSE);
      expect(console.error)
        .toHaveBeenCalled();
      expect(console.error)
        .toHaveBeenCalledWith(MOCK_ERROR_RESPONSE);
      expect(errorsService.addContextInfo)
        .toHaveBeenCalled();
      expect(errorsService.addContextInfo)
        .toHaveBeenCalledWith(MOCK_ERROR_RESPONSE);
      expect(storageService.storeError)
        .toHaveBeenCalled();
    });
  });
});
