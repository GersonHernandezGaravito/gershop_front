import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AppSettings } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AccesoPrivadoService {
  headers: HttpHeaders = new HttpHeaders({'Accept': 'text/html'});
  constructor(private http: HttpClient, private router: Router) { }

  private url  = AppSettings.API_ENDPOINT;

  obtenerHtml(url){
    return this.http.get(url, {headers: this.headers, responseType: "text", observe: "body"})
    .pipe(
      tap(
        data => data.split("<span id=\"priceblock_ourprice\" class=\"a-size-medium a-color-price priceBlockBuyingPriceString\">"),
        //error => console.log(error)
      )
    ); 
  }

  buscarTodos(){
    return this.http.get<any>(this.url + '/cotizacion');
  }

  buscarUno(id){
    return this.http.get<any>(this.url + '/cotizacion/' + id);
  }

  agregar(coti){
    return this.http.post<any>(this.url + '/cotizacion/', coti);
  }

  eliminar(coti){
    return this.http.delete<any>(this.url + '/cotizacion/' + coti._id, coti);
  }

  agregarOrden(orden){
    return this.http.post<any>(this.url + '/compra/', orden);
  }
}
