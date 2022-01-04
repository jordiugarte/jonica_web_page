import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  activeLinkIndex = -1; 

  images = [
    {
      title: "Tenis",
      description: "Hola mundo",
      route: "/assets/images/tenis.jpg"
    }
  ];

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

  openDialog(route: string) {
    const dialogRef = this.dialog.open(DialogComponent, {data: route});
  }

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    
  }
}
