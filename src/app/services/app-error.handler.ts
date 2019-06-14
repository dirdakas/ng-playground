import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {
  handleError(error: HttpErrorResponse) {
    console.error('----- error', error);

    /* @TODO: here we can handle errors globally if we want or hide it */
    if (error instanceof HttpErrorResponse && error.status >= 500) {
      /* @TODO: handle http errors */
    } else {
      /* @TODO: handle other errors somehow or just ignore them */
      /* throwError(error); */
      return EMPTY;
    }
  }
}
