import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GlobalNotificationsService } from './../../../../../services/global-notifications/global-notifications.service';

@Component({
  selector: 'app-complex-template-form',
  templateUrl: './complex-template-form.component.html',
  styleUrls: ['./complex-template-form.component.scss']
})
export class ComplexTemplateFormComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  isSubmitted: boolean = false;

  constructor(
    private globalNotificationsService: GlobalNotificationsService,
  ) {}

  suggestUserName(): void {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.globalNotificationsService
      .addSimpleNotification(
        `Submitted with form values:
        username='${ this.signupForm.value.userData.username }'
        email='${ this.signupForm.value.userData.email }'
        secret='${ this.signupForm.value.secret }'
        questionAnswer='${ this.signupForm.value.questionAnswer }'
        gender='${ this.signupForm.value.gender }'`
      );

    this.signupForm.reset();
  }
}
