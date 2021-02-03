import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../persona-service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonas()
      .subscribe(
        (personaObtenidas: Persona[]) => {
          this.personas = personaObtenidas;
          this.personaService.setPersonas(this.personas);
          console.log('Personas obtenidas del subscriber: ' + this.personas);
        }
      )
      ;
  }

  irAGregar(){
    console.log('Nos vamos a agregar');
    this.router.navigate(['./personas/agregar']);
  }
}
