import { Component, OnInit } from '@angular/core';
import { AccesoPrivadoService } from "../../service/acceso-privado.service";
//import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
@Component({
  selector: 'app-accesoprivado',
  templateUrl: './accesoprivado.component.html',
  styleUrls: ['./accesoprivado.component.css']
})

export class AccesoprivadoComponent implements OnInit {
  constructor(private ap : AccesoPrivadoService,  private router: Router) { }
  texto:string;
  url: string;
  dato; dato2;  dato3; desc: string; nompreProd: string;
  precio; titulo;  imagenes = []; descripcion =[];
  precioLocal; precioDolares;
  buscando = false; cargo = false;
  cotizacion = [];
  ngOnInit(): void {
    //this.url = '';
    //console.log("hola---");
    //window.location.reload();
    //this.http.get('https://gershop.netlify.app/index', {responseType: "text"})
    //this.obtenerPrecio();
    //this.obtenerTitulo;
  }
  
  comprobarRol(){
    return localStorage.getItem('rol');
  }

  buscar(){
    this.cargo = false;
    this.buscando = true;
    this.precio = '';
    console.log("url:", this.url)
    this.precioDolares = null;
    this.precioLocal = null;
    this.obtenerHtml(this.url);
  }

  obtenerHtml(link){
    console.log(link)
    this.ap.obtenerHtml(link)
    .subscribe(
      res => {
        this.texto = res;
        //console.log(this.texto)
        this.imagenes = [];
        this.descripcion = [];
        this.obtenerPrecio();
        this.obtenerTitulo();
        this.obtenerImagenes();
        this.obtenerDescripcion();
      },
      err => {
        console.log(err);
      });
  }

  obtenerPrecio(){
    try {
      this.dato = this.texto.split("<span id=\"priceblock_ourprice\" class=\"a-size-medium a-color-price priceBlockBuyingPriceString\">");
      this.precio = this.dato[1].split("</span>", 1);
      //console.log(this.precio);
      this.dato = null;
      this.calcularPrecio(this.precio);
    } catch (error) {
      console.log("error")
    }

  }
  
  obtenerTitulo(){
    this.dato = this.texto.split("<span id=\"productTitle\" class=\"a-size-large product-title-word-break\">");
    this.titulo = this.dato[1].split("</span>", 1);
    //console.log(this.titulo);
    this.nompreProd = this.titulo.toString().trim();
    this.dato = null;
  }
  
  obtenerImagenes(){
    
    this.dato = this.texto.split("ImageBlockATF");
    this.dato2 = this.dato[1].split("</script>");
    this.dato3 = this.dato2[0].split("\"hiRes\":\"");
    for(let i=1; i<this.dato3.length; i++){
      this.imagenes.push({"path": this.dato3[i].split("\"", 1)});
    }
    //console.log(this.imagenes);
    this.dato = null;
    this.dato2 = null;
    this.dato3 = null;
    this.cargo = true;
  }
  obtenerDescripcion(){
    
    this.dato = this.texto.split("<ul class=\"a-unordered-list a-vertical a-spacing-mini\">");
    this.dato2 = this.dato[1].split("</ul>");
    this.dato3 = this.dato2[0].split("<li><span class=\"a-list-item\">");
    for(let i=1; i<this.dato2.length; i++){
      this.descripcion.push(this.dato3[i].split("</span></li>", 1));
    }
    //console.log(this.descripcion);
    this.dato = null;
    this.dato2 = null;
    this.dato3 = null;
  }

  calcularPrecio(precioDlls){
    this.dato = precioDlls[0].split("US$");
    this.precioDolares = parseFloat(this.dato[1]);
    this.precioLocal = this.precioDolares + 9.78 + 3.36;
    this.precioLocal = this.precioLocal * 7.88;
    this.precioLocal = this.precioLocal.toFixed(2);
    console.log("Precio: Q", this.precioLocal)
  }

  ordenar(){
    this.cotizacion.push({"nombreProducto": this.nompreProd, "url": this.url, "precioUsd": this.precioDolares.toString(), "precioQtz": this.precioLocal});
    console.log(this.cotizacion)
    this.ap.agregar(this.cotizacion[0])
      .subscribe(
        res => {
          
          localStorage.setItem('idCot', res);
          this.router.navigate(['/ordenar']);
          //window.location.replace('/ordenar');
          //this.router.navigate(['/ordenar']);
        },
        err => {
          console.log(err);
        });
        
  }
  
}
