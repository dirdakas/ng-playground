import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { DirectivesComponent } from '../../directives.component';
import { SimpleStructuralDirective } from './../simple-structural/simple-structural.directive';
import { HoverHighlightBindingPropertiesDirective } from './hover-highlight-binding-properties.directive';

describe('HoverHighlightBindingPropertiesDirective', () => {
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
    const directive = new HoverHighlightBindingPropertiesDirective();

    fixture.detectChanges();

    expect(directive)
      .toBeTruthy();
  });
});
