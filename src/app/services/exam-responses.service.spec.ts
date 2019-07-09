import { TestBed } from '@angular/core/testing';

import { ExamResponsesService } from './exam-responses.service';

describe('ExamResponsesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamResponsesService = TestBed.get(ExamResponsesService);
    expect(service).toBeTruthy();
  });
});
