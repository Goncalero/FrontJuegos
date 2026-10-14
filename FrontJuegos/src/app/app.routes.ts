import { Routes } from '@angular/router';
import { MostrarJuegos } from './mostrar-juegos/mostrar-juegos';
import { Administracion } from './administracion/administracion';


export const routes: Routes = [

  { path: '', component: Administracion },

  { path: 'mostrar', component: MostrarJuegos },

];
