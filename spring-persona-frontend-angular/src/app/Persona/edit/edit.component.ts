import { ServiceService } from 'src/app/Servicio/service.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router: Router, private servicePersona: ServiceService) { }

  ngOnInit(): void {
    let idPersona = localStorage.getItem("idPersona");
    this.servicePersona.getPersonaId(+idPersona)
      .subscribe(data => {
        this.persona = data;
      });

  }

  actualizar() {
    this.servicePersona.updataPersona(this.persona)
      .subscribe(data => {
        this.persona = data;
        alert('Se actualizo con Exicto...!');
        this.router.navigate(['listar']);
      })
  }
}
