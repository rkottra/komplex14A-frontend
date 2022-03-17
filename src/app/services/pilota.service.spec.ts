import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PilotaService } from './pilota.service';

describe('PilotaService', () => {
  let service: PilotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PilotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
