import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  urlBase = 'http://localhost:8080/java-backend/webservice/peraonas';

  cargarPersonas() {
    return this.httpClient.get(this.urlBase);
  }

  agregarPersona(p: Persona) {
    return this.httpClient.post(this.urlBase, p);
  }

  modificarPersona(idPersona: number, p: Persona) {
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, p)
      .subscribe(
        (response) => {
          console.log('Resultado modificar persona: ' + response);
        },
        (error) => console.log('Error en modificar persona ' + error)
      );
  }

  eliminarPersona(idPersona: number) {
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
      .subscribe(
        (response) => {
          console.log('Resultado eliminar persona: ' + response);
        },
        (error) => console.log('Error en eliminar persona ' + error)
      );
  }

}
