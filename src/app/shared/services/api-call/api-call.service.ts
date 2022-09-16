import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { repoInfo } from '../../models/repo-info';
import { userInfo } from '../../models/user-info';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  static getDadosService: any;

  constructor(private https: HttpClient) {}

  getDadosService(url: string, args?: any) {
    return this.https.get<any>(url, { params: args }).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
