import {
  NO_ERRORS_SCHEMA,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { DirectivesComponent } from '../../directives.component';
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
        SimpleStructuralDirective,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
