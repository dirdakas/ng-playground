import { Injectable, Injector, isDevMode} from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Observable, of } from 'rxjs';

import { StorageService } from '../storage/storage.service';
import { DevModeService } from '../devMode/dev-mode.service';

export interface IErrorToSend {
  name: any;
  user: any;
  time: any;
  id: any;
  url: any;
  status: any;
  message: any;
  stack: any;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  constructor(
    private injector: Injector,
    private storageService: StorageService,
    private devModeService: DevModeService,
  ) { }

  log(error): Observable<any> {
    // Log the error to the console
    if (this.devModeService.isDevMode()) {
      console.error(error);
    }
    // Send error to server
    const errorToSend = this.addContextInfo(error);

    // @TODO: send this to BE as error log

    this.storageService.storeError(error);

    return fakeHttpService.post(errorToSend);
  }

  addContextInfo(error): IErrorToSend {
    // All the context details that you want (usually coming from other services; Constants, UserService...)
    const name = error.name || null;
    const user = this.storageService.getUserId();
    const time = new Date().getTime();
    const id = `${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error;
    const errorToSend: IErrorToSend = {
      name,
      user,
      time,
      id,
      url,
      status,
      message,
      stack
    };

    return errorToSend;
  }
}

class fakeHttpService {
  static post(error): Observable<any> {
    console.log('Error sent to the server: ', error);
    return of(error);
  }
}