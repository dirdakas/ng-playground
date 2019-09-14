import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-template-form',
  templateUrl: './simple-template-form.component.html',
  styleUrls: ['./simple-template-form.component.scss']
})
export class SimpleTemplateFormComponent {

  onSubmit(form: NgForm) {
    console.log('form', form);
  }
}
