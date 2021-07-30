import { TestBed } from '@angular/core/testing';

import { HttpinterCepterService } from './httpinter-cepter.service';

describe('HttpinterCepterService', () => {
  let service: HttpinterCepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpinterCepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
