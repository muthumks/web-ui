import { TestBed, inject } from '@angular/core/testing';

import { CpaCollegeService } from './cpa-college.service';

describe('CpaCollegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpaCollegeService]
    });
  });

  it('should be created', inject([CpaCollegeService], (service: CpaCollegeService) => {
    expect(service).toBeTruthy();
  }));
});
