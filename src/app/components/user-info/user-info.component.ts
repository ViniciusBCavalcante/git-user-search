import { LocalService } from './../../shared/services/local-storage/local.service';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from './../../shared/services/api-call/api-call.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() username: any;
  api: any;
  url: string = 'https://api.github.com/users/';

  constructor(
    private consumoApi: ApiCallService,
    https: HttpClient,
    private messageService: MessageService,
    private localService: LocalService
  ) {}

  getDados() {
    this.consumoApi.getDadosService(this.url + this.username).subscribe(
      (result) => {
        if (result.status == undefined) {
          this.api = result;
          this.localService.set(this.username + '_user', result);
        }
      },
      (Error) => {
        let auxError = this.localService.get(this.username + '_user');
        if (Object.keys(auxError).length !== 0) {
          this.api = auxError;
        } else {
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
}
