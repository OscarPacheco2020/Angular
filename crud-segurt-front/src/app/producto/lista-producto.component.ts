import { ProductoService } from './../service/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] =  [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProducto();
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
