import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html'
})
export class HomeComponent implements OnInit {

  public titulo:string;
  constructor() {
    this.titulo = "WebApp de Productos con Angular 4";
  }

  ngOnInit() {
    console.log("Se ha cargado el componente home.component.ts");
  }

}
