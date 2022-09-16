import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpMock: HttpTestingController;

  const mockItem = {
    id: 1,
    nome: 'Senna',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCallService],
    });
    service = TestBed.inject(ApiCallService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve buscar uma lista de itens do servidor', () => {
    ApiCallService.getDadosService().subscribe((response: any[]) => {
      expect(response.length).toEqual(1);
      expect(response[0].nome).toEqual('Senna');
    });

    const httpRequest = httpMock.expectOne('https://api.github.com/users/');

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json');

    httpRequest.flush([mockItem]);
  });
});
