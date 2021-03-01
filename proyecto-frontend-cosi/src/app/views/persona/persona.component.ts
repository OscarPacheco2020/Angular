import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {

    this.personaService.listar()
      .subscribe(
        data => this.personas = data
      );

  }

}
