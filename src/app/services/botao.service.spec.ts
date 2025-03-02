import { TestBed } from '@angular/core/testing';

import { BotaoService } from './botao.service';

describe('ButtonThemeService', () => {
  let service: BotaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
