import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './coches/coches.component';

const routes: Routes = [
  { path: '', component: CochesComponent },
  { path: 'coches', component: CochesComponent },
  { path: '**', redirectTo: 'cohes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
