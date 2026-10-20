import { Routes } from '@angular/router';
import { MostrarJuegos } from './mostrar-juegos/mostrar-juegos';
import { Administracion } from './administracion/administracion';


export const routes: Routes = [

  { path: '', component: MostrarJuegos },

  { path: 'admin', component: Administracion },

];
