import { ProductoService } from './../service/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] =  [];
  roles: string[];
  isAdmin: boolean = false;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProducto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    });
  }

  cargarProducto(): void{
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

  borrar(id: number){
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'Ok', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProducto();
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

      }
    );
  }

}
