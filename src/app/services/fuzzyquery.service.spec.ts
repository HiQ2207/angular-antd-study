import { TestBed } from '@angular/core/testing';

import { FuzzyqueryService } from './fuzzyquery.service';

describe('FuzzyqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuzzyqueryService = TestBed.get(FuzzyqueryService);
    expect(service).toBeTruthy();
  });
});
