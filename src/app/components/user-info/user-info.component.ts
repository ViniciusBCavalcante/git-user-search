import { HttpClient } from '@angular/common/http';
import { ApiCallService } from './../../shared/services/api-call/api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  api: any;
  // url: string = 'https://api.github.com/users/mojombo';
  url: string = 'https://api.github.com/users/asdxaa';

  constructor(private consumoApi: ApiCallService, https: HttpClient) {}

  getDados() {
    this.consumoApi.getDadosService(this.url).subscribe(
      (result) => {
        if (result.status == 200) {
          console.log(result);
          this.api = result;
        }
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  ngOnInit() {
    this.getDados();
  }
}
