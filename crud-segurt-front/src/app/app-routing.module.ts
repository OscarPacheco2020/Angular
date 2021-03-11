import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'nuevo', component: NuevoProductoComponent },
  { path: 'editar/:id', component: EditarProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
