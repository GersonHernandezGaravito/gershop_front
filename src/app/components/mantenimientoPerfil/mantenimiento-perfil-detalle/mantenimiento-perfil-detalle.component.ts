import { Component, OnInit } from '@angular/core';
import { MantenimientoPerfilService } from '../../../service/mantenimiento-perfil.service'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-mantenimiento-perfil-detalle',
  templateUrl: './mantenimiento-perfil-detalle.component.html',
  styleUrls: ['./mantenimiento-perfil-detalle.component.css']
})
export class MantenimientoPerfilDetalleComponent implements OnInit {
  perfilActual = null;
  nuevoMenu = null;
  flagN = 0;
  mensaje = '';
  constructor(private mantenimientoService: MantenimientoPerfilService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mensaje = '';
    //this.getUsuario(this.route.snapshot.paramMap.get('id'));
    var iid = localStorage.getItem('pEditar');
    //console.log(iid);
    if(iid== 'new'){
      this.crearPerfil();
    } else {
      this.getPerfil(iid);
    }
  }

  getPerfil(id): void {
    this.mantenimientoService.buscarUno(id)
      .subscribe(
        res => {
          this.perfilActual = res;
          //console.log("------!!!",res);
        },
        err => {
          console.log(err);
        });
  }

  actualizar(): void {
    this.mantenimientoService.actualizar(this.perfilActual)
      .subscribe(
        res => {
          //console.log(res);
          this.mensaje = 'PERFIL ACTUALIZADO';
          this.router.navigate(['/perfil']);
        },
        err => {
          console.log(err);
        });
  }

  eliminar(): void {
    this.mantenimientoService.eliminar(this.perfilActual)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/perfil']);
        },
        err => {
          console.log(err);
        });
  }

  crearPerfil(){
    this.flagN = 1;
    this.perfilActual= {};
  }

  nuevo(){
    this.mantenimientoService.agregar(this.perfilActual)
      .subscribe(
        res => {
          //console.log(res);
          window.location.replace('/perfil');
        },
        err => {
          console.log(err);
        });
  }

}
