import { ApiCallService } from '../../shared/services/api-call/api-call.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepoInfoComponent implements OnInit {
  api: any;
  url: string = 'https://api.github.com/users/viniciusbcavalcante/repos';
  dadosTabela: any = {
    header: ['teste', 'teste2'],
    body: [],
  };
  first = 0;
  rows = 5;

  constructor(private consumoApi: ApiCallService, https: HttpClient) {}

  getDados() {
    this.consumoApi.getDadosService(this.url).subscribe((result) => {
      this.api = result;
    });
  }

  ngOnInit() {
    this.getDados();
  }

  ngOnChanges() {
    this.getDados();
  }
}
