import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ErrorsService } from '../errors/errors.service';
import { GlobalNotificationsService } from '../global-notifications/global-notifications.service';
import { NotificationTypeEnum } from '../../enums/notificationType.enum';
import { TimersEnum } from '../../enums/timers.enum';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler extends ErrorHandler {
  TimersEnum = TimersEnum;

  constructor(
    // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
    private injector: Injector,
  ) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    const globalNotificationsService = this.injector.get(GlobalNotificationsService);
    const errorsService = this.injector.get(ErrorsService);
    const router = this.injector.get(Router);
    console.log('error', error);

    if (error instanceof HttpErrorResponse) {
    // Server error happened      
      if (!navigator.onLine) {
        // No Internet connection
        return globalNotificationsService.addTypedNotification(
          'No Internet connection',
          NotificationTypeEnum.info,
          TimersEnum.medium
        );
      }
      // Http Error
      // Send the error to the server
      errorsService.log(error)
        .subscribe();
      // Show notification to the user
      // @TODO: do something like this later
      // return notificationService.notify(`${error.status} - ${error.message}`);

      globalNotificationsService.addTypedNotification(
        error.statusText,
        NotificationTypeEnum.error,
        TimersEnum.medium
      );
    } else {
      // Client Error Happend
      // Send the error to the server and then
      // redirect the user to the page with all the info
      // @TODO: do something like this later
      // errorsService.log(error)
      //   .subscribe(errorWithContextInfo => {
      //     router.navigate(['/error'], { queryParams: errorWithContextInfo });
      //   });
    }
  }
}
