import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private https: HttpClient) {}

  getDadosService(url: string, args?: any) {
    return this.https.get<any>(url, { params: args }).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
