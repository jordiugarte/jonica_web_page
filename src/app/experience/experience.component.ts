import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  rowItems = [
    {
      title: "Memorial Arq. Calderón",
      description: "Memorial dedicado al arquitecto Juan Carlos Calderón ubicado en el campus de la Universidad Privada Boliviana de La Paz.",
      date: "31 de marzo de 2020",
      image: "/assets/images/constructions/memorial.jpg",
    },
    {
      title: "Anexo Cafetería UPB",
      description: "Anexo para la cafetería del campus de la Universidad Privada Boliviana de La Paz",
      date: "4 de abril de 2020",
      image: "/assets/images/constructions/anexo.jpg",
    },
    {
      title: "Museo de las Culturas del Lago",
      description: "Museo sobre el desarrollo de culturas alrededor del subtramo Desaguadero-Viacha que forma parte del Q'apaqñan y que fue declarado patrimonio de la humanidad.",
      date: "31 de marzo de 2021",
      image: "/assets/images/constructions/museolago.jpg",
    },
    {
      title: "Agencia Banco Unión",
      description: "Agencia del Banco Unión construida en Quillacollo.",
      date: "31 de noviembre de 2016",
      image: "/assets/images/constructions/bunion.jpg",
    },
    {
      title: "Oficinas Gundlach",
      description: "Remodelación de oficinas del edificio Gundlach ubicado en la Plaza del Estudiante.",
      date: "15 de agosto de 2017",
      image: "/assets/images/constructions/oficinas.jpg",
    },
    {
      title: "Agencia Banco Unión",
      description: "Agencia del Banco Unión construida en Villa Bolívar D en la ciudad de El Alto.",
      date: "15 de noviembre de 2016",
      image: "/assets/images/constructions/bolivard.jpg",
    },
    {
      title: "Estación de buses Quirquincho",
      description: "Agencia y estación de buses de la empresa de transporte Quirquincho en la ciudad de El Alto.",
      date: "15 de noviembre de 2014",
      image: "/assets/images/constructions/quirquincho.jpg",
    },
    {
      title: "Puente Ponjoro",
      description: "Construcción de puente en la municipalidad de El Alto.",
      date: "15 de agosto de 2014",
      image: "/assets/images/constructions/ponjoro.jpg",
    },
    {
      title: "Cancha Litoral",
      description: "Construcción de cancha de césped sintético del Stadium Litoral localizado en el distrito de Amachuma.",
      date: "15 de noviembre de 2014",
      image: "/assets/images/constructions/cancha.jpg",
    },
    {
      title: "Universidad Católica Boliviana",
      description: "Remodelación del bloque EP99C-MPD de la Universidad Católica Boliviana.",
      date: "15 de diciembre de 2013",
      image: "/assets/images/constructions/cato.jpg",
    },
    {
      title: "Hospital Maternológio",
      description: "Construcción de Hospital Maternológico y lotes y servicios Distrito IV FASE III. Obra ejecutada para la Cooperación Técnica Belga y el Proyecto de Salud El Alto.",
      date: "15 de diciembre de 2013",
      image: "/assets/images/constructions/hospital.jpg",
    },
    {
      title: "Museo Ferroviario Guaqui",
      description: "Refacción e implementación del Museo Ferroviario Guaqui.",
      date: "13 de marzo de 2011",
      image: "/assets/images/constructions/guaqui.jpg",
    },
    {
      title: "Cine Municipal 6 de Agosto",
      description: "Remodelación y refacción del cine municipal 6 de Agosto. Remodelación de áreas, camarines, escenario, área de butacas y restauración de otros elementos.",
      date: "20 de diciembre de 2009",
      image: "/assets/images/constructions/cine.jpg",
    },
    {
      title: "Teatro al Aire Libre",
      description: "Construcción de espacios complementarios al Teatro al Aire. Construcción de muros y servicios higiénicos.",
      date: "20 de diciembre de 2008",
      image: "/assets/images/constructions/teatro.jpg",
    },
    {
      title: "Parque Urbano Central",
      description: "Construcción del área 12 del Parque Urbano Central. Construcción de canchas, áreas verdes y servicios higiénicos.",
      date: "20 de febrero de 2008",
      image: "/assets/images/constructions/puc.jpg",
    },
    {
      title: "Boulevard Simón Bolívar",
      description: "Construcción del Boulevard Simón Bolívar en el Parque Urabno Central. Construcción de paseos, senderos y áreas de esparcimiento.",
      date: "20 de febrero de 2008",
      image: "/assets/images/constructions/boulevard.jpg",
    },
    {
      title: "Parque Urbano Central - Área 13",
      description: "Construcción del Área 13 de canchas, parrilleros y servicios higiénicos.",
      date: "20 de febrero de 2008",
      image: "/assets/images/constructions/boulevard.jpg",
    },
    {
      title: "Cinemátca Boliviana",
      description: "Fase 5 y 6. Equipamiento, barandas, instalación termomecánica, revestimientos, instalación de gas, carpintería de madera, quincallería.",
      date: "20 de febrero de 2007",
      image: "/assets/images/constructions/cine1.jpg",
    },
    {
      title: "Ministerio de la Presidencia",
      description: "Restauración de la fachada del Palacio de Gobierno. La Paz, Bolivia.",
      date: "20 de abril de 2005",
      image: "/assets/images/constructions/ministerio.jpg",
    },
    {
      title: "Gobierno Municipal de El Alto",
      description: "Construcción de Coliseo de El Alto.",
      date: "20 de junio de 2005",
      image: "/assets/images/constructions/elalto.jpg",
    },
    {
      title: "Ministerio de Economía",
      description: "Construcción de Ministerio de Economía y Finanzas.",
      date: "20 de junio de 2005",
      image: "/assets/images/constructions/economia.jpg",
    },
    {
      title: "Microsoft Bolivia",
      description: "Remodelación de oficinas Microsoft de la ciudad de La Paz en el edificio Torre Ketal.",
      date: "20 de mayo de 2004",
      image: "/assets/images/constructions/microsoft.jpg",
    },
  ]

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: item });
  }

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }
}
