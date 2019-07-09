import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { DirectivesComponent } from '../../directives.component';
import { HoverHighlightBindingDirective } from './hover-highlight-binding.directive';
import {
  HoverHighlightBindingPropertiesDirective
} from './../hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { SimpleStructuralDirective } from './../simple-structural/simple-structural.directive';

describe('HoverHighlightBindingDirective', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        HoverHighlightBindingDirective,
        HoverHighlightBindingPropertiesDirective,
        SimpleStructuralDirective,
      ]
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
