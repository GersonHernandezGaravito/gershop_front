import { Component, OnInit } from '@angular/core';
import { MantenimientoMenuService } from '../../../service/mantenimiento-menu.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-mantenimiento-menus',
  templateUrl: './mantenimiento-menus.component.html',
  styleUrls: ['./mantenimiento-menus.component.css']
})
export class MantenimientoMenusComponent implements OnInit {
  menuActual = null;
  idActual = -1;

  menus = {};

  constructor(private mantenimientoService: MantenimientoMenuService, private router: Router) { }


  ngOnInit(): void {
    this.buscarTodos();
  }
  
  buscarTodos(): void {
    this.mantenimientoService.buscarTodos()
      .subscribe(
        res => {
          this.menus = res;
          console.log(res);
          
        },
        err => {
          console.log(err);
        });
  }

  refreshList(): void {
    this.buscarTodos();
    this.menuActual = null;
    this.idActual = -1;
  }

  setSeleccionado(mmenu, iid): void {
    this.menuActual = mmenu;
    this.idActual = iid;
    localStorage.removeItem('mEditar');
    localStorage.setItem('mEditar', mmenu._id);
  }

  setNew(){
    localStorage.removeItem('mEditar');
    localStorage.setItem('mEditar', 'new');
    this.router.navigate(['/menus/new']);
  }

}
