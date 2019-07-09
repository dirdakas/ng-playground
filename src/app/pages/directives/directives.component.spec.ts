import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';
import { SimpleStructuralDirective } from './children/simple-structural/simple-structural.directive';
import {
  HoverHighlightBindingPropertiesDirective
} from './children/hover-highlight-binding-properties/hover-highlight-binding-properties.directive';
import { HoverHighlightBindingDirective } from './children/hover-highlight-binding/hover-highlight-binding.directive';
import { HoverHighlightRendererDirective } from './children/hover-highlight-renderer/hover-highlight-renderer.directive';
import { SimpleHighlightDirective } from './children/simple-highlight/simple-highlight.directive';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectivesComponent,
        SimpleHighlightDirective,
        HoverHighlightRendererDirective,
        HoverHighlightBindingDirective,
        HoverHighlightBindingPropertiesDirective,
        SimpleStructuralDirective,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
