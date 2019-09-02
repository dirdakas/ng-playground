import { Injectable } from '@angular/core';

export interface ILocalError {
  date: string,
  error: any
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static USER_ID: string = 'userId';
  static LOCALE: string = 'locale';
  static ERROR_LOG: string = 'error_log';

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return sessionStorage.getItem(key);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearData(): void {
    sessionStorage.clear();
  }

  setUserId(userId: string): void {
    this.setItem(StorageService.USER_ID, userId);
  }

  getUserId(): number {
    const userId: string = this.getItem(StorageService.USER_ID);

    return userId ? Number(userId) : null;
  }

  removeUserId(): void {
    this.removeItem(StorageService.USER_ID);
  }

  setLocale(value: string): void {
    this.setItem(StorageService.LOCALE, value);
  }

  getLocale(): string {
    return this.getItem(StorageService.LOCALE);
  }

  removeLocale(): void {
    this.removeItem(StorageService.LOCALE);
  }

  setItemToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getItemFromLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  removeItemFromLocalStorage(key): void {
    localStorage.removeItem(key);
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  storeError(error): void {
    const newError: ILocalError = {
      date: new Date().toISOString(),
      error: error
    };

    let errorList: ILocalError[] = this.getStoredErrors();

    errorList.push(newError);

    localStorage.setItem(
      StorageService.ERROR_LOG,
      JSON.stringify(errorList)
    );
  }

  clearErrors(): void {
    localStorage.clear();
  }

  getStoredErrors(): ILocalError[] {
    const errors: string = localStorage.getItem(StorageService.ERROR_LOG);

    if (errors) {
      return JSON.parse(errors);
    }

    return [];
  }
}
