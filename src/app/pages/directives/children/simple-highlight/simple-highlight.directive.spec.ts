import { ElementRef, Renderer2, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { DirectivesComponent } from './../../directives.component';
import { SimpleHighlightDirective } from './simple-highlight.directive';

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
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
