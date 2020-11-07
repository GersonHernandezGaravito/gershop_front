import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppSettings } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoMenuService {

  private url  = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient, private router: Router) { }
  buscarTodos(){
    return this.http.get<any>(this.url + '/menus');
  }

  buscarUno(id){
    return this.http.get<any>(this.url + '/menus/' + id);
  }

  agregar(menu){
    return this.http.post<any>(this.url + '/menus/', menu);
  }

  actualizar(menu){
    return this.http.patch<any>(this.url + '/menus/' + menu._id, menu);
  }

  eliminar(menu){
    return this.http.delete<any>(this.url + '/menus/' + menu._id, menu);
  }
}
