import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DirectivesComponent } from '../../directives.component';
import { HoverHighlightBindingDirective } from './hover-highlight-binding.directive';

describe('HoverHighlightBindingDirective', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        HoverHighlightBindingDirective,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new HoverHighlightBindingDirective();

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
