import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPageComponent } from './forms-page.component';
import { SimpleTemplateFormModule } from './children/template-driven/simple-template-form/simple-template-form.module';
import { SimpleTemplateFormComponent } from './children/template-driven/simple-template-form/simple-template-form.component';

@NgModule({
  declarations: [
    FormsPageComponent,
  ],
  entryComponents: [
    SimpleTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    SimpleTemplateFormModule,
  ],
  exports: [
    FormsPageComponent,
  ]
})
export class FormsPageModule { }
