import { LocalService } from './../../shared/services/local-storage/local.service';
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
  username: any;
  usernameAux: any;
  user: any;
  usernames: any;
  username_list: any = [];
  username_filtrado: any = [{ id: 0, user: 'Viniciusbcavalcante' }];

  constructor(
    private messageService: MessageService,
    public localService: LocalService
  ) {
    let auxList = this.localService.get('usuarios');
    if (Object.keys(auxList).length !== 0) {
      auxList.forEach((element: any) => {
        this.username_list.push(element.user);
      });
      this.username_filtrado = auxList;
    }
    this.toggleFiltro();
  }

  ngOnInit(): void {}

  toggleFiltro() {
    this.localService.filtrado = false;

    if (this.username !== '' && this.username !== undefined) {
      this.usernameAux = this.username;
      this.localService.filtrado = true;
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
    usernames = this.localService.get('usuarios');
    this.username_list.push(this.username);

    // Transformação de array em lista de objetos
    var list = Object.assign({}, this.username_list);
    usernames = Object.keys(list).map(function (key) {
      return { id: key, user: list[key] };
    });

    // Remoção dos usernames duplicados
    var key = ['user'];
    this.username_filtrado = usernames.filter(
      (
        (s) => (o: { [x: string]: any }) =>
          ((k) => !s.has(k) && s.add(k))(key.map((k) => o[k]).join('|'))
      )(new Set())
    );
    this.localService.set('usuarios', this.username_filtrado);
  }

  setUser(user: any) {
    this.username = user;
    this.toggleFiltro();
  }

  limparHistorico() {
    this.localService.remove('usuarios');
    this.username_list.forEach((element: any) => {
      this.localService.remove(element + '_repo');
      this.localService.remove(element + '_user');
    });
    this.username_filtrado = [];
    this.username_list = [];
    this.localService.filtrado = false;
    this.localService.remove(this.username + '_repo');
    this.localService.remove(this.username + '_user');
  }
}
