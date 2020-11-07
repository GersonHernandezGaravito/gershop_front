import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppSettings, AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //puedo variables de entorno
  private url = AppSettings.API_ENDPOINT
  
  constructor(private http: HttpClient, private router: Router) { }

  registro(usuario){
    return this.http.post<any>(this.url + '/registrar', usuario);

  }

  ingreso(usuario){
    return this.http.post<any>(this.url + '/ingresar', usuario);

  }

  menu(){
    return this.http.get<any>(this.url + '/menuL');
    
  }

  estilo(){
    return this.http.get<any>(this.url + '/estilos');
  }

  public lista(): Observable<AppComponent[]> {
    return this.http.get<AppComponent[]>(this.url + '/');
    
  }

  comprobarIngreso(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
    localStorage.removeItem('uEditar');
    localStorage.removeItem('idU');
    localStorage.removeItem('estilo');
    window.location.replace('/index');
  }
  
  comprobarRol(){
    return localStorage.getItem('rol');
  }

}
