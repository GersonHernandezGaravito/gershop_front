import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { AccesopublicoComponent } from './components/accesopublico/accesopublico.component';
import { AccesoprivadoComponent } from './components/accesoprivado/accesoprivado.component';
import { ManejarTokenService } from "./service/manejar-token.service";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from "./auth.guard";
import { CmenuComponent } from './components/cmenu/cmenu.component';
import { MantenimientoUsuariosComponent } from './components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { MantenimientoUsuariosDetallesComponent } from './components/mantenimiento-usuarios-detalles/mantenimiento-usuarios-detalles.component';
import { EstilosComponent } from './components/estilos/estilos.component';
import { MantenimientoMenusComponent } from './components/mantenimientoMenu/mantenimiento-menus/mantenimiento-menus.component';
import { MantenimientoMenusDetallesComponent } from './components/mantenimientoMenu/mantenimiento-menus-detalles/mantenimiento-menus-detalles.component';
import { MantenimientoPerfilComponent } from './components/mantenimientoPerfil/mantenimiento-perfil/mantenimiento-perfil.component';
import { MantenimientoPerfilDetalleComponent } from './components/mantenimientoPerfil/mantenimiento-perfil-detalle/mantenimiento-perfil-detalle.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { OrdenarCompraComponent } from './components/ordenar-compra/ordenar-compra.component';

//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    IngresarComponent,
    AccesopublicoComponent,
    AccesoprivadoComponent,
    CmenuComponent,
    MantenimientoUsuariosComponent,
    MantenimientoUsuariosDetallesComponent,
    EstilosComponent,
    MantenimientoMenusComponent,
    MantenimientoMenusDetallesComponent,
    MantenimientoPerfilComponent,
    MantenimientoPerfilDetalleComponent,
    OrdenarCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManejarTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }