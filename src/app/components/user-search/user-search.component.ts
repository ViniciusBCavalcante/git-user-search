import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  value3: string;
  filtrado: boolean = false;
  username: any;
  user: any;
  usernames: any;
  username_list: any = [];
  username_filtrado: any = [];

  constructor() {}

  ngOnInit(): void {}

  toggleFiltro() {
    this.filtrado = true;
    this.getUserHistorico();
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
    this.user = user[0];
    this.getUserHistorico();
  }
}
