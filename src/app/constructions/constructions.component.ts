import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})

export class ConstructionsComponent implements OnInit {

  rowItems = [
    {
      title: "Proyectos",
      description: [
        "Diseño arquitectónico",
        "Diseño estructural",
        "Infraestructura hidrosanitaria, termomecánica, eléctrica y domótica",
      ],
      image: "/assets/images/epc.jpg",
      route: "proyectos"
    },
    {
      title: "Construcciones",
      description: [
        "Obra civiles",
        "Patologías y rehabilitación de edificios",
        "Restauración del patrimonio arquitectónico"
      ],
      image: "/assets/images/palacio.jpg",
      route: "construcciones"
    },
    {
      title: "Consultorías",
      description: [
        "Gestión de proyectos y avalúos",
        "Museografía",
        "Urbanismo y paisajismo",
      ],
      image: "./assets/images/avaluo.jpg",
      route: "consultorias"
    }
  ];

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: item });
  }

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

}
