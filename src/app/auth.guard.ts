import { Injectable } from '@angular/core';
import { CanActivate, Route } from '@angular/router';
import { AuthService } from "./service/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){
  }

  canActivate(): boolean{
    if(this.authService.comprobarIngreso()){
    return true;
    }
    this.router.navigate(['/ingresar']);
    return false;
  }
  
}
