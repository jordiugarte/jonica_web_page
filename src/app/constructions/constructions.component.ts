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

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {data: item});
  }

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
  }

}
