import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      route: "./obras"
    },
    {
      title: "Construcciones",
      description: [
        "Obra civiles",
        "Patologías y rehabilitación de edificios",
        "Restauración del patrimonio arquitectónico"
      ],
      image: "/assets/images/palacio.jpg",
      route: "./restauraciones"
    },
    {
      title: "Consultorías",
      description: [
        "Gestión de proyectos y avalúos",
        "Museografía",
        "Urbanismo y paisajismo",
      ],
      image: "./assets/images/avaluo.jpg",
      route: "./avaluos"
    }
  ];

  load(route: string) {
    this.router.navigate([route]);
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }
}
