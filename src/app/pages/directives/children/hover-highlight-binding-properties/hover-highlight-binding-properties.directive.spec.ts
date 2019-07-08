import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DirectivesComponent } from '../../directives.component';
import { HoverHighlightBindingPropertiesDirective } from './hover-highlight-binding-properties.directive';

describe('HoverHighlightBindingPropertiesDirective', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        HoverHighlightBindingPropertiesDirective,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new HoverHighlightBindingPropertiesDirective();

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
