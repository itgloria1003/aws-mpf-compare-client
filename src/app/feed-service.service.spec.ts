/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedServiceService } from './feed-service.service';

describe('FeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedServiceService]
    });
  });

  it('should ...', inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
