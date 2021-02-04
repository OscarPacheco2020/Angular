import { ServiceService } from './../../Servicio/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router: Router, private servicioPersona: ServiceService) { }

  ngOnInit(): void {
  }

  guardar() {

    this.servicioPersona.createPersona(this.persona)
    .subscribe(data =>{
      alert("Se Agrego una nueva persona con esito");
      this.router.navigate(['listar']);
    }
    );
  }
}
