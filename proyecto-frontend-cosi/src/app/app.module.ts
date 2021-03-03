import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './views/persona/persona.component';
import { ConfirmDialogComponent } from './views/persona/confirm-dialog/confirm-dialog.component';
import { PersonaModelComponent } from './views/persona-model/persona-model.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorEsp } from './resource/mat-paginator';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ConfirmDialogComponent,
    PersonaModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorEsp}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
