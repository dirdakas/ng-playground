import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ComplexTemplateFormComponent } from './complex-template-form.component';

@NgModule({
  declarations: [
    ComplexTemplateFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ComplexTemplateFormComponent
  ]
})
export class ComplexTemplateFormModule { }
