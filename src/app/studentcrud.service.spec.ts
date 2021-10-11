import { TestBed } from '@angular/core/testing';

import { StudentcrudService } from './studentcrud.service';

describe('StudentcrudService', () => {
  let service: StudentcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
