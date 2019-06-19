import { TestBed } from '@angular/core/testing';
import { ComponentFactoryResolver } from '@angular/core';

import { DynamicComponentCreationService } from './dynamic-component-creation.service';

import SpyObj = jasmine.SpyObj;

describe('DynamicComponentCreationService', () => {
  let dynamicComponentCreationService: DynamicComponentCreationService;
  let componentFactoryResolver: SpyObj<ComponentFactoryResolver>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ComponentFactoryResolver,
          useValue: jasmine.createSpyObj('ComponentFactoryResolver', [
            'resolveComponentFactory',
          ]),
        },
      ]
    });

    dynamicComponentCreationService = TestBed.get(DynamicComponentCreationService);
    componentFactoryResolver = TestBed.get(ComponentFactoryResolver);
  });

  it('should be created', () => {
    expect(dynamicComponentCreationService)
      .toBeTruthy();
  });

  it('should create new component', () => {
    const container = {
      clear: () => true,
      createComponent: () => true
    };
    let componentRef = false;
    const component = 'component mock';

    spyOn(container, 'clear').and
      .callThrough();
    spyOn(container, 'createComponent').and
      .callThrough();
    componentFactoryResolver.resolveComponentFactory.and
      .callThrough();

    dynamicComponentCreationService.createComponent(
      container,
      componentRef,
      component
    );

    expect(container.clear)
      .toHaveBeenCalled();
    expect(container.createComponent)
      .toHaveBeenCalled();
    expect(componentFactoryResolver.resolveComponentFactory)
      .toHaveBeenCalled();
  });
});
