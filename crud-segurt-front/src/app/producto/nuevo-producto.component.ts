import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = '';
  precio: number = null;
  colorLabel: boolean = true;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    if (this.precio >= 0) {
      this.colorLabel = true;

      const producto = new Producto(this.nombre, this.precio);
      this.productoService.save(producto).subscribe(
        data => {
          this.toastr.success('Producto Creado', 'Ok', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/lista']);
        },
        error => {
          this.toastr.error(error.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/lista']);
        }
      );
    } else {
      this.colorLabel = false;
    }

  }

}
