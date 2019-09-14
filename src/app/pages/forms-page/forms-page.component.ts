import {
  Component,
  ViewChildren,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

import { IExampleObject } from './../../interfaces/example-object';
import { SimpleTemplateFormComponent } from './children/template-driven/simple-template-form/simple-template-form.component';
import { DynamicComponentCreationService } from './../../shared/dynamic-component-creation/dynamic-component-creation.service';
import { ComplexTemplateFormComponent } from './children/template-driven/complex-template-form/complex-template-form.component';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent {
  @ViewChildren('templateDriven', { read: ViewContainerRef }) templateDrivenContainer;
  @ViewChildren('reactive', { read: ViewContainerRef }) reactiveContainer;

  templateDrivenList: IExampleObject[] = [
    {
      component: SimpleTemplateFormComponent,
      description: 'Simple example of template driven form'
    },
    {
      component: ComplexTemplateFormComponent,
      description: 'Complex form with different formGroups, reset etc.'
    }
  ];

  reactiveList: IExampleObject[] = [
    {
      component: null,
      description: ''
    }
  ];

  private componentRef: ComponentRef<any>;

  constructor(
    private dynamicComponentCreationService: DynamicComponentCreationService,
  ) {}

  toggleCollapsible(
    element: HTMLElement,
    index: number,
    list: IExampleObject[],
    container: any
  ): void {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      list[index]['isActive'] = true;

      this.dynamicComponentCreationService.createComponent(
        container._results[index],
        this.componentRef,
        list[index].component
      );
    } else {
      element.style.display = 'none';
      list[index]['isActive'] = false;
    }
  }

  toggleTemplate(element: HTMLElement, index: number): void {
    this.toggleCollapsible(
      element,
      index,
      this.templateDrivenList,
      this.templateDrivenContainer
    );
  }

  toggleReactive(element: HTMLElement, index: number): void {
    this.toggleCollapsible(
      element,
      index,
      this.reactiveList,
      this.reactiveContainer
    );
  }

  showContent(element: HTMLElement): void {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
}
