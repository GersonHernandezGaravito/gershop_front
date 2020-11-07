import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ManejarTokenService implements HttpInterceptor{

  constructor( private authService: AuthService) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeader: {
        Autorization: 'Bearer ${this.authService.getToken()}'
      }
    })
    return next.handle(tokenizeReq);
  }

  
}
