import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {
      name: "Juan Carlos Ugarte",
      occupation: "Arquitecto",
      phone: 77790111,
      email: "ugartearq@gmail.com",
      image: "./assets/images/juancarlos.jpg"
    },
    {
      name: "Carmen Yaffar",
      occupation: "Consultora",
      phone: 77790111,
      email: "cyaffar@gmail.com",
      image: "./assets/images/carmen.jpg"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toWhatsapp(phone: any){
    window.open("https://api.whatsapp.com/send?phone=591" + phone, "_blank");
  }

  toEmail(email: any){
    window.open("mailto:" + email + "?subject=Consulta", "_blank");
  }
}
