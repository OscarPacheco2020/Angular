import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  displayedColumns = ['idPersona', 'nombre', 'apellido', 'edad', 'pais', 'editar-eliminar'];

  dataSource: MatTableDataSource<Persona>;

  personas: Persona[];

  constructor(
    private matDialog: MatDialog,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listar()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
        }
      );
  }

  onEliminar(id: number) {
    let dialo = this.matDialog.open(ConfirmDialogComponent, {
    });

    dialo.afterClosed().subscribe(
      estado => {
        if (estado) {
          this.personaService.eliminar(id).subscribe(
            () => {
              this.personaService.listar().subscribe(
                data => {
                  this.dataSource = new MatTableDataSource(data);
                }
              );
            }
          );
        }
      }
    );
  }

}
