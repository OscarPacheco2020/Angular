import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona-service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  idPersona: number;
  nombreInput: string;
  apellidoInput: string;
  emailInput: string;
  telefonoInput: string;

  constructor(private personaservice: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPersona = this.route.snapshot.params.idPersona;
    console.log('Recuperamos el idPersona: ' + this.idPersona);
    if (this.idPersona != null) {
      const persona = this.personaservice.encontrarPersona(this.idPersona);
      if (persona != null) {
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
        this.emailInput = persona.email;
        this.telefonoInput = persona.telefono;
      }
    }
  }

  onGuardarPersona() {
    const personaAguardar = new Persona(this.idPersona, this.nombreInput,
      this.apellidoInput, this.emailInput, this.telefonoInput);

    if (this.idPersona != null) {
      this.personaservice.modificarPersona(this.idPersona, personaAguardar);
    } else {
      this.personaservice.agregarPersona(personaAguardar);
    }
    this.router.navigate(['personas']);
  }

  onEliminarPersona(){
    if(this.idPersona != null){
      console.log('Persona a eliminar con id: ' + this.idPersona);
      this.personaservice.eliminarPersona(this.idPersona);
    }
    this.router.navigate(['personas']);
  }

}
