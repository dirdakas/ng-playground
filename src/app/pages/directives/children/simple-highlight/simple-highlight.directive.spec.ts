import { ElementRef, Renderer2 } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { DirectivesComponent } from './../../directives.component';
import { SimpleHighlightDirective } from './simple-highlight.directive';
import {
  HoverHighlightBindingPropertiesDirective
} from './../hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { SimpleStructuralDirective } from './../simple-structural/simple-structural.directive';

describe('SimpleHighlightDirective', () => {
  let elementRef: jasmine.SpyObj<ElementRef>;
  let renderer2: jasmine.SpyObj<Renderer2>;

  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        SimpleHighlightDirective,
        HoverHighlightBindingPropertiesDirective,
        SimpleStructuralDirective,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new SimpleHighlightDirective(
      elementRef,
      renderer2
    );

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
