import { TestBed } from '@angular/core/testing';

import { StorageService, ILocalError } from './storage.service';

describe('StorageService', () => {
  let storageService: StorageService;

  const MOCK_STRING_VALUE: string = 'MockValue-123';
  let store = {};
  let sessionStorage_MOCK = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
  let localStorage_MOCK = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => { store = {}; }
  };
  const MOCK_ERROR_1: string = 'This is an error #1';
  const MOCK_ERROR_2: string = 'This is an error #2';
  const MOCK_STORED_RESULT: ILocalError[] = [
    {
      date: new Date().toISOString(),
      error: MOCK_ERROR_1
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});

    storageService = TestBed.get(StorageService);
  });

  it('should be created', () => {
    expect(storageService).toBeTruthy();
  });

  it('should check setItem', () => {
    const key: string = 'key';
    const val: string = 'value';
    spyOn(sessionStorage, 'setItem').and.callFake(
      sessionStorage_MOCK.setItem
    );

    storageService.setItem(key, val);

    expect(sessionStorage.setItem)
      .toHaveBeenCalled();
    expect(sessionStorage.setItem)
      .toHaveBeenCalledWith(key, val);
  });

  it('should check getItem', () => {
    const key: string = 'key';
    spyOn(sessionStorage, 'getItem').and.callFake(
      sessionStorage_MOCK.getItem
    );

    storageService.getItem(key);

    expect(sessionStorage.getItem)
      .toHaveBeenCalled();
    expect(sessionStorage.getItem)
      .toHaveBeenCalledWith(key);
  });

  it('should check removeItem', () => {
    const key: string = 'key';
    spyOn(sessionStorage, 'removeItem').and.callFake(
      sessionStorage_MOCK.removeItem
    );

    storageService.removeItem(key);

    expect(sessionStorage.removeItem)
      .toHaveBeenCalled();
    expect(sessionStorage.removeItem)
      .toHaveBeenCalledWith(key);
  });

  describe('should check locale storing', () => {
    it('check setItem', () => {
      spyOn(sessionStorage, 'setItem').and.callFake(
        sessionStorage_MOCK.setItem
      );
  
      storageService.setLocale(MOCK_STRING_VALUE);
  
      expect(sessionStorage.setItem)
        .toHaveBeenCalled();
      expect(sessionStorage.setItem)
        .toHaveBeenCalledWith(
          StorageService.LOCALE,
          MOCK_STRING_VALUE
        );
    });
  
    it('check getItem', () => {
      spyOn(sessionStorage, 'getItem').and.callFake(
        sessionStorage_MOCK.getItem
      );
  
      storageService.getLocale();
  
      expect(sessionStorage.getItem)
        .toHaveBeenCalled();
      expect(sessionStorage.getItem)
        .toHaveBeenCalledWith(StorageService.LOCALE);
    });
  
    it('check removeItem', () => {
      spyOn(sessionStorage, 'removeItem').and.callFake(
        sessionStorage_MOCK.removeItem
      );
  
      storageService.removeLocale();
  
      expect(sessionStorage.removeItem)
        .toHaveBeenCalled();
      expect(sessionStorage.removeItem)
        .toHaveBeenCalledWith(StorageService.LOCALE);
    });
  });

  describe('should check UserId storing', () => {
    it('check setItem', () => {
      spyOn(sessionStorage, 'setItem').and.callFake(
        sessionStorage_MOCK.setItem
      );
  
      storageService.setUserId(MOCK_STRING_VALUE);
  
      expect(sessionStorage.setItem)
        .toHaveBeenCalled();
      expect(sessionStorage.setItem)
        .toHaveBeenCalledWith(
          StorageService.USER_ID,
          MOCK_STRING_VALUE
        );
    });
  
    it('check getItem', () => {
      spyOn(sessionStorage, 'getItem').and.callFake(
        sessionStorage_MOCK.getItem
      );
  
      storageService.getUserId();
  
      expect(sessionStorage.getItem)
        .toHaveBeenCalled();
      expect(sessionStorage.getItem)
        .toHaveBeenCalledWith(StorageService.USER_ID);
    });

    it('check getItem', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue(null);
  
      const result = storageService.getUserId();
  
      expect(sessionStorage.getItem)
        .toHaveBeenCalled();
      expect(sessionStorage.getItem)
        .toHaveBeenCalledWith(StorageService.USER_ID);
      expect(result)
        .toBeNull();
    });

    it('check removeItem', () => {
      spyOn(sessionStorage, 'removeItem').and.callFake(
        sessionStorage_MOCK.removeItem
      );
  
      storageService.removeUserId();
  
      expect(sessionStorage.removeItem)
        .toHaveBeenCalled();
      expect(sessionStorage.removeItem)
        .toHaveBeenCalledWith(StorageService.USER_ID);
    });
  });

  it('should clear data', () => {
    spyOn(sessionStorage, 'removeItem').and.callFake(
      sessionStorage_MOCK.removeItem
    );
  
    storageService.removeUserId();

    expect(sessionStorage.removeItem)
      .toHaveBeenCalled();
    expect(sessionStorage.removeItem)
      .toHaveBeenCalledWith(StorageService.USER_ID);
  });

  it('should clear storage', () => {
    spyOn(sessionStorage, 'clear').and.callThrough();
    
    storageService.clearData();

    expect(sessionStorage.clear)
      .toHaveBeenCalled();
  });

  it('should set item to local storage', () => {
    const key: string = 'key';
    const val: string = 'value';
    spyOn(localStorage, 'setItem').and.callFake(
      localStorage_MOCK.setItem
    );

    storageService.setItemToLocalStorage(key, val);

    expect(localStorage.setItem)
      .toHaveBeenCalled();
    expect(localStorage.setItem)
      .toHaveBeenCalledWith(key, val);
  });

  it('should set item to local storage', () => {
    const key: string = 'key';
    const val: string = 'value';
    spyOn(localStorage, 'setItem').and.callFake(
      localStorage_MOCK.setItem
    );

    storageService.setItemToLocalStorage(key, val);

    expect(localStorage.setItem)
      .toHaveBeenCalled();
    expect(localStorage.setItem)
      .toHaveBeenCalledWith(key, val);
  });

  it('should check getItem from localStorage', () => {
    const key: string = 'key';
    spyOn(localStorage, 'getItem').and.callFake(
      localStorage_MOCK.getItem
    );

    storageService.getItemFromLocalStorage(key);

    expect(localStorage.getItem)
      .toHaveBeenCalled();
    expect(localStorage.getItem)
      .toHaveBeenCalledWith(key);
  });

  it('should check removeItem from localStorage', () => {
    const key: string = 'key';
    spyOn(localStorage, 'removeItem').and.callFake(
      localStorage_MOCK.removeItem
    );

    storageService.removeItemFromLocalStorage(key);

    expect(localStorage.removeItem)
      .toHaveBeenCalled();
    expect(localStorage.removeItem)
      .toHaveBeenCalledWith(key);
  });

  it('should check clear() from localStorage', () => {
    spyOn(localStorage, 'clear').and.callFake(
      localStorage_MOCK.clear
    );
    storageService.clearLocalStorage();
    expect(localStorage.clear)
      .toHaveBeenCalled();
  });

  describe('should store errors on localStorage', () => {
    it('should store first time error', () => {
      storageService.clearErrors();

      spyOn(localStorage, 'getItem')
        .and
        .returnValues(
          null,
          JSON.stringify(MOCK_STORED_RESULT)
        );
      spyOn(localStorage, 'setItem')
        .and
        .callThrough();

      storageService.storeError(MOCK_ERROR_1);

      const errors: ILocalError[] = storageService.getStoredErrors();

      expect(localStorage.getItem)
        .toHaveBeenCalled();
      expect(localStorage.getItem)
        .toHaveBeenCalledWith(StorageService.ERROR_LOG);
      expect(localStorage.setItem)
        .toHaveBeenCalled();
      expect(errors[0].error)
        .toEqual(MOCK_ERROR_1);
    });

    it('should store second time error', () => {
      storageService.clearErrors();

      const MOCK_STORED_RESULT_2: ILocalError[] = [
        {
          date: new Date().toISOString(),
          error: MOCK_ERROR_1
        },
        {
          date: new Date().toISOString(),
          error: MOCK_ERROR_2
        }
      ];

      spyOn(localStorage, 'getItem')
        .and
        .returnValues(
          null,
          JSON.stringify(MOCK_STORED_RESULT),
          JSON.stringify(MOCK_STORED_RESULT_2)
        );
      spyOn(localStorage, 'setItem')
        .and
        .callThrough();

      storageService.storeError(MOCK_ERROR_1);
      storageService.storeError(MOCK_ERROR_2);

      const errors: ILocalError[] = storageService.getStoredErrors();

      expect(localStorage.getItem)
        .toHaveBeenCalled();
      expect(localStorage.getItem)
        .toHaveBeenCalledWith(StorageService.ERROR_LOG);
      expect(localStorage.setItem)
        .toHaveBeenCalled();
      expect(errors[0].error)
        .toEqual(MOCK_ERROR_1);
      expect(errors[1].error)
        .toEqual(MOCK_ERROR_2);
    });
  });

  it('should clear errors', () => {
    storageService.clearErrors();
    let errors: ILocalError[] = storageService.getStoredErrors();

    expect(errors)
      .toEqual([]);

    storageService.storeError(MOCK_ERROR_1);
    storageService.storeError(MOCK_ERROR_1);
    
    errors = storageService.getStoredErrors();

    expect(errors.length)
      .toEqual(2);

    storageService.clearErrors();

    errors = storageService.getStoredErrors();

    expect(errors)
      .toEqual([]);
  });
});
