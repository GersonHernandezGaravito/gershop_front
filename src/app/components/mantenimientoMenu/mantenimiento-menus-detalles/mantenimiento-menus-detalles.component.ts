import { Component, OnInit } from '@angular/core';
import { MantenimientoMenuService } from '../../../service/mantenimiento-menu.service'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-mantenimiento-menus-detalles',
  templateUrl: './mantenimiento-menus-detalles.component.html',
  styleUrls: ['./mantenimiento-menus-detalles.component.css']
})
export class MantenimientoMenusDetallesComponent implements OnInit {
  menuActual = null;
  nuevoMenu = null;
  flagN = 0;
  mensaje = '';
  constructor(private mantenimientoService: MantenimientoMenuService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mensaje = '';
    //this.getUsuario(this.route.snapshot.paramMap.get('id'));
    var iid = localStorage.getItem('mEditar');
    //console.log(iid);
    if(iid== 'new'){
      this.crearMenu();
    } else {
      this.getMenu(iid);
    }
  }

  getMenu(id): void {
    this.mantenimientoService.buscarUno(id)
      .subscribe(
        res => {
          this.menuActual = res;
          //console.log("------!!!",res);
        },
        err => {
          console.log(err);
        });
  }

  actualizar(): void {
    this.mantenimientoService.actualizar(this.menuActual)
      .subscribe(
        res => {
          //console.log(res);
          this.mensaje = 'MENU ACTUALIZADO';
          this.router.navigate(['/menus']);
        },
        err => {
          console.log(err);
        });
  }

  eliminar(): void {
    this.mantenimientoService.eliminar(this.menuActual)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/menus']);
        },
        err => {
          console.log(err);
        });
  }

  crearMenu(){
    this.flagN = 1;
    this.menuActual= {};
  }

  nuevo(){
    this.mantenimientoService.agregar(this.menuActual)
      .subscribe(
        res => {
          //console.log(res);
          window.location.replace('/menus');
        },
        err => {
          console.log(err);
        });
  }
}
