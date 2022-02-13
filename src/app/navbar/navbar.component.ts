import { Component, HostListener } from '@angular/core';
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
  mobile = false;
  showFiller = false;

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
        label: 'Servicios',
        link: './servicios',
        index: 2
      },
      {
        label: 'Experiencia',
        link: './experiencia',
        index: 3
      },
      {
        label: 'Contacto',
        link: './contacto',
        index: 4
      }, 
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      }
    );
    this.detectScreenSize
  }

  @HostListener('window:resize', [])
  onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    this.mobile = window.screen.width <= 1200;
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}