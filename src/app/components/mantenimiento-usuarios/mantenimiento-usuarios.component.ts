import { Component, OnInit } from '@angular/core';
import { MantenimientoUsuariosService } from '../../service/mantenimiento-usuarios.service'
import { Router } from "@angular/router";


@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.css']
})
export class MantenimientoUsuariosComponent implements OnInit {
  //usuarios: any;
  usuarioActual = null;
  idActual = -1;

  usuarios = {};

  constructor(private mantenimientoService: MantenimientoUsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.mantenimientoService.buscarTodos()
      .subscribe(
        res => {
          this.usuarios = res;
          console.log(res);
          
        },
        err => {
          console.log(err);
        });
  }

  refreshList(): void {
    this.buscarTodos();
    this.usuarioActual = null;
    this.idActual = -1;
  }

  setSeleccionado(uusaurio, iid): void {
    this.usuarioActual = uusaurio;
    this.idActual = iid;
    localStorage.removeItem('uEditar');
    localStorage.setItem('uEditar', uusaurio._id);
  }

  comprobarRol(){
    return localStorage.getItem('rol');
  }
}
