import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppSettings  } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoUsuariosService {
  //private url = 'https://gershop.herokuapp.com/api'
  private url = AppSettings.API_ENDPOINT;
  constructor(private http: HttpClient, private router: Router) { }
  buscarTodos(){
    return this.http.get<any>(this.url + '/usuarios');
  }

  buscarUno(id){
    return this.http.get<any>(this.url + '/usuarios/' + id);
  }

  agregar(usuario){
    return this.http.post<any>(this.url + '/usuarios/', usuario);
  }

  actualizar(usuario){
    return this.http.patch<any>(this.url + '/usuarios/' + usuario._id, usuario);
  }
  actualizarEstilo(usuario, estilo){
    return this.http.patch<any>(this.url + '/usuarios/' + usuario, estilo);
  }

  eliminar(usuario){
    return this.http.delete<any>(this.url + '/usuarios/' + usuario._id, usuario);
  }

}
