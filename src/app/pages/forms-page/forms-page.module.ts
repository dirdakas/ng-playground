import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPageComponent } from './forms-page.component';
import { SimpleTemplateFormModule } from './children/template-driven/simple-template-form/simple-template-form.module';
import { SimpleTemplateFormComponent } from './children/template-driven/simple-template-form/simple-template-form.component';
import { ComplexTemplateFormComponent } from './children/template-driven/complex-template-form/complex-template-form.component';
import { ComplexTemplateFormModule } from './children/template-driven/complex-template-form/complex-template-form.module';

@NgModule({
  declarations: [
    FormsPageComponent,
  ],
  entryComponents: [
    SimpleTemplateFormComponent,
    ComplexTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    SimpleTemplateFormModule,
    ComplexTemplateFormModule,
  ],
  exports: [
    FormsPageComponent,
  ]
})
export class FormsPageModule { }
