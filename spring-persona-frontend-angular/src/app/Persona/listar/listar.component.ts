import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];

  constructor(private servicePersona: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.servicePersona.getPersonas()
      .subscribe(
        data => {
          this.personas = data;
        }
      );
  }

  editar(p: Persona) {
    localStorage.setItem("idPersona", p.idPersona.toString());
    this.router.navigate(['edit']);

  }

  eliminar(p: Persona) {
    this.servicePersona.deletePersona(p)
      .subscribe(data => {
        this.personas = this.personas.filter(persona => persona !== p);
        alert('Usuario Eliminado');
      });
  }

}
