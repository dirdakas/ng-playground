import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTemplateFormComponent } from './simple-template-form.component';

describe('SimpleTemplateFormComponent', () => {
  let component: SimpleTemplateFormComponent;
  let fixture: ComponentFixture<SimpleTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTemplateFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
