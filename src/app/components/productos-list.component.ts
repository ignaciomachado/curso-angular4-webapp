import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from ' @angular/router/';

@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos.list.component.html'
})
export class ProductosListComponent implements OnInit {

  public titulo:string;
  constructor() {
    this.titulo = "Listado de Productos";

  ngOnInit() {
    console.log("Se ha cargado el componente home.component.ts");
  }

}
