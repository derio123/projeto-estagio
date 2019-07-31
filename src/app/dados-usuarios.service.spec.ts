import { TestBed } from '@angular/core/testing';

import { DadosUsuariosService } from './dados-usuarios.service';

describe('DadosUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosUsuariosService = TestBed.get(DadosUsuariosService);
    expect(service).toBeTruthy();
  });
});
