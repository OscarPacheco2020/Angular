
import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PersonaModelComponent } from '../persona-model/persona-model.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  displayedColumns = ['idPersona', 'nombre', 'apellido', 'edad', 'pais', 'editar-eliminar'];

  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private matDialog: MatDialog,
    private personaService: PersonaService) { }

  ngOnInit(): void {

    this.personaService.personaActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.personaService.listar()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
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


  onOpenModal(p?: Persona) {
    let persona = p != null ? p : new Persona();
    this.matDialog.open(PersonaModelComponent, {
      data: persona
    }

    );
  }

  filtrar(valor: string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }


}
