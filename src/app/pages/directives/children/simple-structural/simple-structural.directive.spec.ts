import { TemplateRef, ViewContainerRef } from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { DirectivesComponent } from '../../directives.component';
import {
  HoverHighlightBindingPropertiesDirective
} from './../hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { SimpleStructuralDirective } from './simple-structural.directive';

describe('SimpleStructuralDirective', () => {
  let templateRef: jasmine.SpyObj<TemplateRef<any>>;
  let vcRef: jasmine.SpyObj<ViewContainerRef>;

  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        HoverHighlightBindingPropertiesDirective,
        SimpleStructuralDirective,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new SimpleStructuralDirective(
      templateRef,
      vcRef
    );

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
