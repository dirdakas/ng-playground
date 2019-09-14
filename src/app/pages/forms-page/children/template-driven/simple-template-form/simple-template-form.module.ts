import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTemplateFormComponent } from './simple-template-form.component';

@NgModule({
  declarations: [
    SimpleTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    SimpleTemplateFormComponent,
  ]
})
export class SimpleTemplateFormModule { }
