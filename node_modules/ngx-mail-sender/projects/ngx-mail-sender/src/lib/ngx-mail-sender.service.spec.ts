import { TestBed } from '@angular/core/testing';

import { NgxMailSenderService } from './ngx-mail-sender.service';

describe('NgxMailSenderService', () => {
  let service: NgxMailSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMailSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
