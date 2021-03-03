import { PaisService } from './../../service/pais.service';
import { PersonaService } from 'src/app/service/persona.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pais } from 'src/app/model/pais';

@Component({
  selector: 'app-persona-model',
  templateUrl: './persona-model.component.html',
  styles: [
  ]
})
export class PersonaModelComponent implements OnInit {

  persona: Persona;
  paises: Pais[];
  colorLabel: boolean;


  constructor(
    private matDialogRef: MatDialogRef<PersonaModelComponent>,
    private personaService: PersonaService,
    private paisService: PaisService,
    @Inject(MAT_DIALOG_DATA) private data: Persona
  ) { }

  ngOnInit(): void {

    this.colorLabel = true;
    this.paisService.listar().subscribe(
      data => { this.paises = data; }

    );

    this.persona = new Persona();
    this.persona.idPersona = this.data.idPersona;
    this.persona.nombre = this.data.nombre;
    this.persona.apellido = this.data.apellido;
    this.persona.edad = this.data.edad;


    if (this.data.pais != null) {
      this.persona.pais = this.data.pais;
    } else {
      this.persona.pais = new Pais();
      this.persona.pais.idPais = 1;
    }

  }


  onGuardar(p: Persona) {

    if(p.edad >= 18){
      this.colorLabel = true;
      if (p != null && p.idPersona > 0) {

        this.personaService.editar(p).subscribe(() => {
          return this.personaService.listar().subscribe(data => {
            this.personaService.personaActualizar.next(data);
          });
        });

      } else {

        this.personaService.registrar(p).subscribe(() => {
          this.personaService.listar().subscribe(data => {
            this.personaService.personaActualizar.next(data);
          });
        });

      }
      this.matDialogRef.close();
    }else{
      this.colorLabel = false;
      console.log('menor');
    }


  }

  onCancelar() {
    this.matDialogRef.close();
  }


}
