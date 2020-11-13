import { Component, OnInit } from '@angular/core';
import { AccesoPrivadoService } from "../../service/acceso-privado.service";
import { MantenimientoUsuariosService } from '../../service/mantenimiento-usuarios.service'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-ordenar-compra',
  templateUrl: './ordenar-compra.component.html',
  styleUrls: ['./ordenar-compra.component.css']
})
export class OrdenarCompraComponent implements OnInit {
  productoActual = null;
  usuarioActual = null;
  ordenFinal= [];;
  mensaje = '';
  telefono = ''; nombreCliente = ''; apellidoCliente = ''; dpi = '';
  nit = ''; direccion = '';

  constructor(private ap: AccesoPrivadoService, private route: ActivatedRoute, private router: Router, private mantenimientoService: MantenimientoUsuariosService,) { }


  ngOnInit(): void {
    //this.ordenFinal= {};
    this.mensaje = '';
    //this.getUsuario(this.route.snapshot.paramMap.get('id'));
    var iid = localStorage.getItem('idCot');
    var id = localStorage.getItem('idU');
    //console.log(iid);
    this.getData(iid, id);
  }

  getData(iid, id): void {
    this.ap.buscarUno(iid)
      .subscribe(
        res => {
          this.productoActual = res;
          //console.log("------!!!",res);
        },
        err => {
          console.log(err);
        });
    this.mantenimientoService.buscarUno(id)
      .subscribe(
        res => {
          this.usuarioActual = res;
        },
        err => {
          console.log(err);
        });
  }

  confirmar(): void {
    //this.ordenFinal.correo = this.usuarioActual.correo;
    //this.ordenFinal.producto =this.productoActual.nombreProducto;
    //this.ordenFinal.url =this.productoActual.url;
    //this.ordenFinal.precioQtz =this.productoActual.precioQtz;
    this.ordenFinal.push({"nombreCliente": this.nombreCliente, "apellidoCliente": this.apellidoCliente, "dpi": this.dpi, "nit": this.nit, 
    "direccion": this.direccion, "telefono": this.telefono, "correo": this.usuarioActual.correo, "producto": this.productoActual.nombreProducto, "url": this.productoActual.url, 
    "precioQtz": this.productoActual.precioQtz});
    
    this.grabarOrden(this.ordenFinal);
    alert("Gracias por su Compra, en breve recibirá un Correo de Confirmación");
    this.router.navigate(['/index']);
  }
  grabarOrden(data): void {
    this.ap.agregarOrden(data[0])
      .subscribe(
        res => {
          console.log(res);
          this.mensaje = 'ORDEN CREADA';
          localStorage.removeItem('idCot');
        },
        err => {
          console.log(err);
        });
  }
  eliminar(): void {
    this.ap.eliminar(this.productoActual)
      .subscribe(
        res => {
          console.log(res);
          localStorage.removeItem('idCot');
          this.router.navigate(['/inicio']);
        },
        err => {
          console.log(err);
        });
  }
}
