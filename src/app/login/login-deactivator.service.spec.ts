import { TestBed } from '@angular/core/testing';

import { LoginDeactivatorService } from './login-deactivator.service';

describe('LoginDeactivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginDeactivatorService = TestBed.get(LoginDeactivatorService);
    expect(service).toBeTruthy();
  });
});
