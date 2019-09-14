import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { GlobalNotificationsService } from './../../../../../services/global-notifications/global-notifications.service';

@Component({
  selector: 'app-simple-template-form',
  templateUrl: './simple-template-form.component.html',
  styleUrls: ['./simple-template-form.component.scss']
})
export class SimpleTemplateFormComponent {
  defaultOption: string = 'Dog';

  constructor(
    private globalNotificationsService: GlobalNotificationsService,
  ) {}

  onSubmit(form: NgForm) {
    this.globalNotificationsService
      .addSimpleNotification(
        `Submitted with form values:
        Input='${ form.value.simpleInput }'
        DropDown='${ form.value.simpleDropdown}'`
      );
  }
}
