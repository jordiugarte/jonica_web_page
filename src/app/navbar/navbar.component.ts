import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Inicio',
        link: './inicio',
        index: 0
      },
      {
        label: 'Conócenos',
        link: './empresa',
        index: 1
      },
      {
        label: 'Obras',
        link: './obras',
        index: 2
      },
      {
        label: 'Restauraciones',
        link: './restauraciones',
        index: 3
      },
      {
        label: 'Avalúos',
        link: './avaluos',
        index: 4
      },
      {
        label: 'Experiencia',
        link: './experiencia',
        index: 5
      },
      {
        label: 'Contacto',
        link: './contacto',
        index: 6
      }, 
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      }
    );
  }
}