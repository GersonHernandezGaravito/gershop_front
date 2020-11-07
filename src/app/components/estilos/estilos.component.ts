import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service'
import { Router } from "@angular/router";
import { MantenimientoUsuariosService } from '../../service/mantenimiento-usuarios.service'

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  estilos = {};
  estiloActual = null;
  usuarioActual = null;
  idActual = -1;
  idUser = '';
  constructor(private mantenimientoService: MantenimientoUsuariosService, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.buscarTodos();
    this.getUsuario();
  }

  buscarTodos(): void {
    this.authservice.estilo()
      .subscribe(
        res => {
          this.estilos = res;
          console.log(res);
          
        },
        err => {
          console.log(err);
        });
  }

  refreshList(): void {
    this.buscarTodos();
    this.estiloActual = null;
    this.idActual = -1;
  }

  setSeleccionado(eestilo, iid): void {
    this.estiloActual = eestilo;
    this.idActual = iid;   
    //localStorage.removeItem('uEditar');
    //localStorage.setItem('uEditar', uusaurio._id);
  }

  elegirEstilo(){
    //localStorage.removeItem('estilo');
    //localStorage.setItem("estilo", this.estiloActual.link);
    //localStorage.setItem("estilo", this.idActual.toString());
    this.idUser = localStorage.getItem("idU");  
    this.usuarioActual.codigoEstilo = this.idActual;
    //console.log(this.usuarioActual);
    this.actualizar();
  } 

  getUsuario(): void {
    this.mantenimientoService.buscarUno(localStorage.getItem("idU"))
      .subscribe(
        res => {
          this.usuarioActual = res;
          //console.log("------..!!", this.usuarioActual);
        },
        err => {
          console.log(err);
        });
  }
  actualizar(): void {
    this.mantenimientoService.actualizar(this.usuarioActual)
      .subscribe(
        res => {
          //console.log(this.usuarioActual);
          //this.mensaje = 'USUARIO ACTUALIZADO';
          localStorage.removeItem('estilo');
          localStorage.setItem('estilo', this.usuarioActual.codigoEstilo);
          //this.router.navigate(['/inicio']); 
          window.location.replace('/index');
        },
        err => {
          console.log(err);
        });
  }
}
