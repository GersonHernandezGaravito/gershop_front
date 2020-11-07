import { Component, OnInit } from '@angular/core';
import { MantenimientoUsuariosService } from '../../service/mantenimiento-usuarios.service'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-mantenimiento-usuarios-detalles',
  templateUrl: './mantenimiento-usuarios-detalles.component.html',
  styleUrls: ['./mantenimiento-usuarios-detalles.component.css']
})
export class MantenimientoUsuariosDetallesComponent implements OnInit {
  usuarioActual = null;
  mensaje = '';
  constructor(private mantenimientoService: MantenimientoUsuariosService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.mensaje = '';
    //this.getUsuario(this.route.snapshot.paramMap.get('id'));
    var iid = localStorage.getItem('uEditar');
    //console.log(iid);
    this.getUsuario(iid);
  }

  getUsuario(id): void {
    this.mantenimientoService.buscarUno(id)
      .subscribe(
        res => {
          this.usuarioActual = res;
          //console.log("------!!!",res);
        },
        err => {
          console.log(err);
        });
  }

  actualizar(): void {
    this.mantenimientoService.actualizar(this.usuarioActual)
      .subscribe(
        res => {
          console.log(this.usuarioActual.codigoRol);
          this.mensaje = 'USUARIO ACTUALIZADO';
          localStorage.removeItem('rol');
          localStorage.setItem('rol', this.usuarioActual.codigoEstilo);
          this.router.navigate(['/usuarios']);
        },
        err => {
          console.log(err);
        });
  }

  eliminar(): void {
    this.mantenimientoService.eliminar(this.usuarioActual)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => {
          console.log(err);
        });
  }
}
