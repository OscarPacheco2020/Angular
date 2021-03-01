import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  displayedColumns = ['idPersona', 'nombre', 'apellido', 'edad', 'pais'];

  dataSource: MatTableDataSource<Persona>;

  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listar()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
         }
      );
  }

}
