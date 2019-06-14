import { TestBed } from '@angular/core/testing';

import { DynamicComponentCreationService } from './dynamic-component-creation.service';

describe('DynamicComponentCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicComponentCreationService = TestBed.get(DynamicComponentCreationService);
    expect(service)
      .toBeTruthy();
  });
});
