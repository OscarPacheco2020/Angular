import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 url = environment.productionURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]> (this.url);
  }

  public detail(id: number): Observable<Producto>{
    return this.httpClient.get<Producto> (this.url + `${id}`);
  }

  public detailName(nombre: string): Observable<Producto>{
    return this.httpClient.get<Producto> (this.url + `name/${nombre}`);
  }

  public save(procuto: Producto): Observable<any>{
    return this.httpClient.post<any>(this.url, procuto);
  }

  public updata(id: number, procuto: Producto): Observable<any>{
    return this.httpClient.put<any>(this.url + `${id}`, procuto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `${id}`);
  }
}
