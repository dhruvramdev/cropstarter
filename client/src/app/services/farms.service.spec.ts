import { TestBed, inject } from '@angular/core/testing';

import { FarmsService } from './farms.service';

describe('FarmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmsService]
    });
  });

  it('should be created', inject([FarmsService], (service: FarmsService) => {
    expect(service).toBeTruthy();
  }));
});
