import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.component.html',
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {

  public titulo:string;
  public producto:Producto;
  constructor(
    private _productoService:ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Crear un nuevo producto";
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit() {
      console.log("Se ha cargado el componente productos-add.component.ts");
  }

  onSubmit(){
    console.log(this.producto);
    this._productoService.addProducto(this.producto).subscribe(
      response => {
        if (response.code == 200){
          this._router.navigate(['/productos']);
        }
        else{
          alert(response);
        }
      },
      error => {
        console.log(<any> error);
      }
    );
  }

}
