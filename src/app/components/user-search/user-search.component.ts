import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  providers: [MessageService],
})
export class UserSearchComponent {
  value3: string;
  filtrado: boolean = false;
  username: any;
  user: any;
  usernames: any;
  username_list: any = [];
  username_filtrado: any = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  toggleFiltro() {
    console.log(this.username);
    if (this.username !== '' && this.username !== undefined) {
      this.filtrado = true;
      this.getUserHistorico();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'Você deve digitar um usuário na pesquisa.',
      });
    }
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  getUserHistorico() {
    let usernames: any = [];
    this.username_list.push(this.username);
    console.log(this.username_list);

    // Transformação de array em lista de objetos
    var list = Object.assign({}, this.username_list);
    console.log(list);
    usernames = Object.keys(list).map(function (key) {
      return { id: key, user: list[key] };
    });
    console.log(usernames);

    // Remoção dos usernames duplicados
    var key = ['user'];
    this.username_filtrado = usernames.filter(
      (
        (s) => (o: { [x: string]: any }) =>
          ((k) => !s.has(k) && s.add(k))(key.map((k) => o[k]).join('|'))
      )(new Set())
    );
    console.log(this.username_filtrado);
  }

  setUser(user: any) {
    console.log(user[0]);
    this.username = user;
    this.getUserHistorico();
  }
}
