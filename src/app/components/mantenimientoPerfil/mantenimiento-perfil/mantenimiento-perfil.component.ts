import { Component, OnInit } from '@angular/core';
import { MantenimientoPerfilService } from '../../../service/mantenimiento-perfil.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-mantenimiento-perfil',
  templateUrl: './mantenimiento-perfil.component.html',
  styleUrls: ['./mantenimiento-perfil.component.css']
})
export class MantenimientoPerfilComponent implements OnInit {

  perfilActual = null;
  idActual = -1;

  perfil = {};

  constructor(private mantenimientoService: MantenimientoPerfilService, private router: Router) { }


  ngOnInit(): void {
    this.buscarTodos();
  }
  
  buscarTodos(): void {
    this.mantenimientoService.buscarTodos()
      .subscribe(
        res => {
          this.perfil = res;
          //console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  refreshList(): void {
    this.buscarTodos();
    this.perfilActual = null;
    this.idActual = -1;
  }

  setSeleccionado(mmenu, iid): void {
    this.perfilActual = mmenu;
    this.idActual = iid;
    localStorage.removeItem('pEditar');
    localStorage.setItem('pEditar', mmenu._id);
  }

  setNew(){
    localStorage.removeItem('pEditar');
    localStorage.setItem('pEditar', 'new');
    this.router.navigate(['/perfil/new']);
  }
}
