import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

import { DirectivesComponent } from '../../directives.component';
import { HoverHighlightRendererDirective } from './hover-highlight-renderer.directive';
import {
  HoverHighlightBindingPropertiesDirective
} from './../hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { SimpleStructuralDirective } from './../simple-structural/simple-structural.directive';

describe('HoverHighlightRendererDirective', () => {
  let elementRef: jasmine.SpyObj<ElementRef>;
  let renderer2: jasmine.SpyObj<Renderer2>;

  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        HoverHighlightRendererDirective,
        HoverHighlightBindingPropertiesDirective,
        SimpleStructuralDirective,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new HoverHighlightRendererDirective(
      elementRef,
      renderer2
    );

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
