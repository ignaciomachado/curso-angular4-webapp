import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.component.html',
  providers: [ProductoService]
})
export class ProductosListComponent {

  public titulo:string;
  public productos: Producto[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = "Listado de Productos";
  }

  ngOnInit() {
    console.log("Se ha cargado el componente productos-list.component.ts");
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe(
      result => {
        if (result.code != 200){
          console.log(result);
        }
        else {
          this.productos = result.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onDeleteProducto(id){
    this._productoService.deleteProducto(id).subscribe(
      response => {
        if (response.code == 200){
          this.getProductos();
        }
        else {
          alert("Error en el Servidor");
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
