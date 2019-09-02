import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DevModeService } from './dev-mode.service';

describe('DevModeService', () => {
  let devModeService: DevModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });

    devModeService = TestBed.get(DevModeService);
  });

  it('should be created', () => {
    expect(devModeService)
      .toBeTruthy();
  });

  it('get devMode true', () => {
    const result: boolean = devModeService.isDevMode();

    expect(result)
      .toBeTruthy();
  });
});
