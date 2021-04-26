import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './coches/coches.component';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  { path: '', component: CochesComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'paises', component: PaisesComponent },
  { path: '**', redirectTo: 'cohes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
