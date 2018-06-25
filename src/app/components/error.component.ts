import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'error',
  templateUrl: '../views/error.component.html'
})
export class ErrorComponent implements OnInit {

  public titulo:string;
  constructor() {
    this.titulo = "Error 404. Página no encontrada";
  }

  ngOnInit() {
    console.log("Se ha cargado el componente error.component.ts");
  }

}
