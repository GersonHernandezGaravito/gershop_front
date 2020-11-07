import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AppSettings } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoPerfilService {
  private url  = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient, private router: Router) { }
  buscarTodos(){
    return this.http.get<any>(this.url + '/roles');
  }

  buscarUno(id){
    return this.http.get<any>(this.url + '/roles/' + id);
  }

  agregar(perfil){
    return this.http.post<any>(this.url + '/roles/', perfil);
  }

  actualizar(perfil){
    return this.http.patch<any>(this.url + '/roles/' + perfil._id, perfil);
  }

  eliminar(perfil){
    return this.http.delete<any>(this.url + '/roles/' + perfil._id, perfil);
  }
}
