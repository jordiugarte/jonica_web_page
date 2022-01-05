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
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
    {
      title: "Obras",
      description: "Descripcion",
      date: "10/10/10",
      image: "/assets/images/epc.jpg",
    },
  ]

  load(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

}
