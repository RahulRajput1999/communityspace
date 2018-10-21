import {TestBed, inject} from '@angular/core/testing';

import {GetsessionService} from './getsession.service';

describe('GetsessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetsessionService]
    });
  });

  it('should be created', inject([GetsessionService], (service: GetsessionService) => {
    expect(service).toBeTruthy();
  }));
});
