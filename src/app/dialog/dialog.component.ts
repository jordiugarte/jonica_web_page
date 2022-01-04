import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title = "";
  content = "";
  image = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    switch(this.data) {
      case "proyectos": {
        this.title = "Proyectos";
        this.content = "Contenido";
        this.image = "images";
        break;
      }
      case "construcciones": {
        this.title = "Construcciones";
        this.content = "Contenido";
        this.image = "./assets/images/servicios.jpg";
        break;
      }
      case "consultorias": {
        this.title = "Consultorías";
        this.content = "Contenido";
        this.image = "image";
        break;
      }
      default: {
        this.title = "Proyectos";
        this.content = "Contenido";
        this.image = "image";
        break;
      }
    }
  }

}
