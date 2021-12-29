import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  images = [
    {
      title: "Columna",
      description: "Esto es una columna",
      route: "/assets/images/columna.jpg"
    },
    {
      title: "Tenis",
      description: "Hoa mundo",
      route: "/assets/images/tenis.jpg"
    }
  ];

  rowItems = [
    {
      title: "Obras",
      description: "Descripcion",
      image: "/assets/images/epc.jpg",
      route: "./obras"
    },
    {
      title: "Restauraciones",
      description: "Descripcion",
      image: "/assets/images/palacio.jpg",
      route: "./restauraciones"
    },
    {
      title: "Avalúos",
      description: "Descripcion",
      image: "./assets/images/avaluo.jpg",
      route: "./avaluos"
    }
  ]

  load(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }
}
