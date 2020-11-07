import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccesopublicoComponent} from './components/accesopublico/accesopublico.component'
import {AccesoprivadoComponent} from './components/accesoprivado/accesoprivado.component'
import {RegistrarComponent} from './components/registrar/registrar.component'
import {IngresarComponent} from './components/ingresar/ingresar.component'
import {MantenimientoUsuariosComponent} from './components/mantenimiento-usuarios/mantenimiento-usuarios.component'
import {MantenimientoUsuariosDetallesComponent} from './components/mantenimiento-usuarios-detalles/mantenimiento-usuarios-detalles.component'
import { MantenimientoMenusComponent } from "./components/mantenimientoMenu/mantenimiento-menus/mantenimiento-menus.component";
import { MantenimientoMenusDetallesComponent } from "./components/mantenimientoMenu/mantenimiento-menus-detalles/mantenimiento-menus-detalles.component";
import { EstilosComponent } from "./components/estilos/estilos.component";
import { AuthGuard } from "./auth.guard";
import { MantenimientoPerfilComponent } from './components/mantenimientoPerfil/mantenimiento-perfil/mantenimiento-perfil.component'
import { MantenimientoPerfilDetalleComponent } from './components/mantenimientoPerfil/mantenimiento-perfil-detalle/mantenimiento-perfil-detalle.component'
import { MantenimientoPerfilService } from './service/mantenimiento-perfil.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: AccesopublicoComponent
  },
  {
    path: 'inicio',
    component: AccesoprivadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: MantenimientoUsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios/:id',
    component: MantenimientoUsuariosDetallesComponent,
    canActivate: [AuthGuard]
  },{
    path: 'menus',
    component: MantenimientoMenusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menus/:id',
    component: MantenimientoMenusDetallesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menus/new',
    component: MantenimientoMenusDetallesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: MantenimientoPerfilComponent,
    canActivate: [AuthGuard]
  },{
    path: 'perfil/:id',
    component: MantenimientoPerfilDetalleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil/new',
    component: MantenimientoPerfilDetalleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'estilos',
    component: EstilosComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
