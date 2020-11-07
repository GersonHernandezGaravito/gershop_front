import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario = {
    nombreU: '',
    correo: '',
    contrasena: '',
    intentos: '10'
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { 
    
  }

  registro(){
    
    this.authService.registro(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        //Se puede guardar en Cookies
        localStorage.setItem('token', res.token);
        localStorage.setItem('idU', res.id);
        localStorage.setItem('rol', res.rol);
        this.router.navigate(['/privado'])
      },
      err => console.log(err)
    )
  }
}
