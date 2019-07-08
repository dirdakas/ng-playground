import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from './directives.component';
import { SimpleHighlightDirective } from './children/simple-highlight/simple-highlight.directive';
import { HoverHighlightRendererDirective } from './children/hover-highlight-renderer/hover-highlight-renderer.directive';
import {
  HoverHighlightBindingPropertiesDirective
} from './children/hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { HoverHighlightBindingDirective } from './children/hover-highlight-binding/hover-highlight-binding.directive';
import { SimpleStructuralDirective } from './children/simple-structural/simple-structural.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    SimpleHighlightDirective,
    HoverHighlightRendererDirective,
    HoverHighlightBindingDirective,
    HoverHighlightBindingPropertiesDirective,
    SimpleStructuralDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DirectivesComponent,
    SimpleHighlightDirective,
    HoverHighlightRendererDirective,
    HoverHighlightBindingDirective,
    HoverHighlightBindingPropertiesDirective,
    SimpleStructuralDirective,
  ],
})
export class DirectivesModule { }
