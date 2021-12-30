import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})

export class ConstructionsComponent implements OnInit {

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
