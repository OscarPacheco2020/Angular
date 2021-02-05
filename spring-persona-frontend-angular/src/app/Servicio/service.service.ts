import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/spring-peronas-backend/personas';

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(p: Persona) {
    return this.http.post<Persona>(this.Url, p);
  }

  getPersonaId(id: number) {
    return this.http.get<Persona>(this.Url + '/' + id);
  }

  updataPersona(p: Persona) {
    return this.http.put<Persona>(this.Url + '/' + p.idPersona, p);
  }

  deletePersona(p: Persona) {
    return this.http.delete<Persona>(this.Url + '/' + p.idPersona);
  }
}
