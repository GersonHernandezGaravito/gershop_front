import { Component } from '@angular/core';
import { AuthService } from "./service/auth.service";
import { Router } from "@angular/router";
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estilo = "0";
  rol = "0";
  modeloMenu = [{
    _id: '',
    menu: '',
    padre: '',
    link: '',
    permiso: ''
  }]

  modeloOrden = [{
    id: '',
    hijos: []
  }]

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() { 
    this.rol = localStorage.getItem('rol');
    this.estilo = localStorage.getItem('estilo');
    if(this.estilo == null){ this.estilo = "0"};
    this.cargarMenu();
  }
  comprobarEstilo(){
    return localStorage.getItem('estilo');
  }

  cargarMenu(){
    this.authService.menu()
    .subscribe(
      res => {
        //console.log(res)
        this.modeloMenu = res;
        //console.log(this.modeloMenu);
        //console.log("----------");
        this.cargarDropDown();
        //console.log(this.modeloOrden);


      },
      err => console.log(err)
    )
  }

  cargarListas(): void {
    for (var i = 0; i < this.modeloMenu.length; i++){
      //this.modeloOrden[i].id = this.modeloMenu[i]._id;
      //this.modeloOrden[i].menu = this.modeloMenu[i].menu;
      //console.log("id: ", this.modeloMenu[i]._id);
      for(var j = 0; j < this.modeloMenu.length; j++){
        if(this.modeloMenu[i]._id == this.modeloMenu[j].padre){
          //this.modeloOrden[i].hijos[j] = this.modeloMenu[j]._id;
          //console.log("     hijo: ", this.modeloMenu[j]._id);    
        }
      }
    }
    //console.log("-->", this.modeloOrden);
  }

  cargarListas2(): void {
    var varid = [];
    var cont = 0;
    for (var i = 0; i < this.modeloMenu.length; i++){
      //console.log(varid.includes(this.modeloMenu[i]._id ), " = ", this.modeloMenu[i]._id );  
      if (!varid.includes(this.modeloMenu[i]._id )){
        varid[cont] = this.modeloMenu[i]._id;
        cont++;
      }
      if (varid.includes(this.modeloMenu[i]._id )){
        for(var j = 0; j < this.modeloMenu.length; j++){
          if(this.modeloMenu[i]._id == this.modeloMenu[j].padre){
            //this.modeloOrden[i].hijos[j] = this.modeloMenu[j]._id;
            //console.log("padre: ", this.modeloMenu[i]._id,"  hijo: ", this.modeloMenu[j]._id);
            varid[cont] = this.modeloMenu[j]._id;    
            cont++;
            //console.log("-->", varid[i]);
          }
        }
      }
      //console.log("-->", varid[i]);
    }
    //console.log("---------->", varid);
  }

  cargarDropDown(): void {
    var varid = [];
    var idHijos = [];
    var cont = 0;
    for (var i = 0; i < this.modeloMenu.length; i++){
      if(this.modeloMenu[i].padre == "0"){
        var idPadre = this.modeloMenu[i]._id;
        var cont2 =0;
        for (var j = 0; j < this.modeloMenu.length; j++){
          //console.log()
          if(this.modeloMenu[j].padre == idPadre){
            idHijos[cont2] = this.modeloMenu[j]._id;
            cont2++;
          }
        }
        
        //this.modeloOrden[cont].id = idPadre;
        //this.modeloOrden[cont].hijos = idHijos;
        //console.log(idPadre, "  -- ", idHijos);
        this.modeloOrden.push({id: idPadre, hijos: idHijos});
        idPadre = "";
        idHijos = [null];
        cont++;

      }
    }
    
  }

}
export class AppSettings {
  //public static API_ENDPOINT='http://localhost:3130/api';
  public static API_ENDPOINT='https://gershop.herokuapp.com/api';
}
