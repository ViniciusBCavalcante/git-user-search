import { LocalService } from './../../shared/services/local-storage/local.service';
import { repoInfo } from './../../shared/models/repo-info';
import { MessageService } from 'primeng/api';
import { ApiCallService } from '../../shared/services/api-call/api-call.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepoInfoComponent implements OnInit {
  @Input() username: any;
  api: repoInfo[];
  displayModal: boolean;
  highlighted: any;
  dadosModal: repoInfo;
  skeleton: any = ['1', '2', '3', '4', '5'];

  url: string = 'https://api.github.com/users/';

  dadosTabela: any = {
    header: ['Name', 'Description', 'Language', 'Created at', 'Stars'],
    body: [],
  };
  first = 0;
  rows = 5;

  constructor(
    private consumoApi: ApiCallService,
    https: HttpClient,
    private messageService: MessageService,
    private localService: LocalService
  ) {}

  getDados() {
    this.consumoApi
      .getDadosService(this.url + this.username + '/repos')
      .subscribe(
        (result) => {
          if (result.status == undefined) {
            this.api = result;
            this.localService.set(this.username + '_repo', result);
          }
        },
        (Error) => {
          let auxError = this.localService.get(this.username + '_repo');
          if (Object.keys(auxError).length !== 0) {
            this.messageService.add({
              severity: 'error',
              summary: 'Atenção!',
              detail:
                'Parece que você está sem conexão... Recuperando dados de histórico',
            });
            this.api = auxError;
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Atenção!',
              detail: 'Este usuário não existe.',
            });
            this.localService.filtrado = false;
          }
        }
      );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // this.getDados();
  }

  ngOnChanges() {
    this.getDados();
  }

  toggleModal(dadosModal: any) {
    this.dadosModal = dadosModal;
    this.displayModal = true;
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
