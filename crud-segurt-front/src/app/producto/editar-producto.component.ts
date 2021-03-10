import { ToastrService } from 'ngx-toastr';
import { ProductoService } from './../service/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto;
  colorLabel: boolean = true;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    if (this.producto.precio >= 0) {
      this.colorLabel = true;
      const id = this.activatedRoute.snapshot.params.id;
      this.productoService.updata(id, this.producto).subscribe(
        data => {
          this.toastr.success('Producto Actualizado', 'Ok', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        error => {
          this.toastr.error(error.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        }
      );
    } else {
      this.colorLabel = false;
    }

  }

}
