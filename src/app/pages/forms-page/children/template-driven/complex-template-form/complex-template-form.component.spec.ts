import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTemplateFormComponent } from './complex-template-form.component';
import { GlobalNotificationsService } from './../../../../../services/global-notifications/global-notifications.service';

describe('ComplexTemplateFormComponent', () => {
  let component: ComplexTemplateFormComponent;
  let fixture: ComponentFixture<ComplexTemplateFormComponent>;

  let globalNotificationsService: jasmine.SpyObj<GlobalNotificationsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexTemplateFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: GlobalNotificationsService,
          useValue: jasmine.createSpyObj('GlobalNotificationsService', [
            'addSimpleNotification',
          ]),
        },
      ]
    })
    .compileComponents();

    globalNotificationsService = TestBed.get(GlobalNotificationsService);

    fixture = TestBed.createComponent(ComplexTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
