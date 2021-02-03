import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {

  personas: Persona[] = [];

  constructor(private dataService: DataService) { }

  // Se usa para modificar el valor del arreglo dedido a la llamada asincrona
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  agregarPersona(p: Persona) {
    console.log('Persona a gregar: ' + p.nombre);
    this.dataService.agregarPersona(p)
      .subscribe(
        (p: Persona) => {
          //Recuperamos objeto Persona con el idPersona recien agregado
          console.log('Se agrega al arreglo la persona recien insertada suscriber: ' + p.idPersona);
          this.personas.push(p);
        }
      );
  }

  encontrarPersona(id: number) {
    const p: Persona = this.personas.find(p => p.idPersona == id);
    console.log('Persona encontrada: ' + p.idPersona + ' ' + p.nombre);
    return p;
  }

  modificarPersona(id: number, p: Persona) {
    console.log('Persona a modificar: ' + p.idPersona);
    //se actualiza el objecto persona del arreglo
    const personaModificadaLocal = this.personas.find(p => p.idPersona == id);
    personaModificadaLocal.idPersona = p.idPersona;
    personaModificadaLocal.nombre = p.nombre;
    personaModificadaLocal.apellido = p.apellido;
    personaModificadaLocal.email = p.email;
    personaModificadaLocal.telefono = p.telefono;
    //guarda la persona en la base de datos
    this.dataService.modificarPersona(id, p);
  }

  eliminarPersona(id: number){
    console.log('Eliminar persona con id: ' + id);
    const index = this.personas.findIndex(p => p.idPersona == id);
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }

}
