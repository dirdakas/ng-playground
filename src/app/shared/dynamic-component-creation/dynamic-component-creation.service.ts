import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentCreationService {
  constructor(
    private resolver: ComponentFactoryResolver,
  ) {}

  createComponent(
    container,
    componentRef,
    component,
  ): void {
    container.clear();
    const factory: ComponentFactory<any> = this.resolver
      .resolveComponentFactory(component);
    componentRef = container.createComponent(factory);
  }
}
