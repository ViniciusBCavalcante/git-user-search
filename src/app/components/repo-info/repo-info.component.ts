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
  skeleton: any = ['1', '2', '3', '4', '5'];
  url: string = 'https://api.github.com/users/mojombo/repos';
  dadosTabela: any = {
    header: ['Name', 'Description', 'Language', 'Created at', 'Stars'],
    body: [],
  };
  first = 0;
  rows = 5;
  displayModal: boolean;

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

  toggleModal() {
    this.displayModal = true;
    console.log(this.displayModal);
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
