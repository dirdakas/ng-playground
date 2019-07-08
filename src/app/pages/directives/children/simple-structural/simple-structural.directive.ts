import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appSimpleStructural]'
})
export class SimpleStructuralDirective {
  @Input() set appSimpleStructural(condition: boolean) {
    if (!condition) {
      this.vcRef.clear();
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
  ) { }
}
