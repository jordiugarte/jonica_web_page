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
      title: "Tenis",
      description: "Hola mundo",
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

  load(route: string) {
    this.router.navigateByUrl(route);
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }
}
