import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  usuario = {
    nombreU: '',
    contrasena: ''
  };
  error = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ingreso(){
    this.authService.ingreso(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('idU', res.id);
        localStorage.setItem('rol', res.rol);
        localStorage.setItem('estilo', res.estilo);
        window.location.replace('/inicio');
        //this.router.navigate(['/inicio']);
      },
      err => {
        //console.log(err.error);
        this.error= err;
      }
      )
  }

}
