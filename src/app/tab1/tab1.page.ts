import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasantia} from '../models/pasantia';
import { PasantiaService } from '../services/pasantia.service';

import 'firebase/firestore';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  description: boolean = false;
  pasantias=[
    {
      id:12,
      logo:'https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1.png',
      nombre:'Pasantia de mercadeo',
      area:'Finanzas',
      requisistos:' Tener el primer año aprobado, exceptuando el CBC - ser alumno regular de grado de la Facultad de Ciencias Sociales, UBA - contar con una disponibilidad de 20 hs. por semana',
      visibilidad: false
    },
    {
      id:12,
      logo:'https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1.png',
      nombre:'Pasantia de mercadeo',
      area:'Finanzas',
      requisistos:' Tener el primer año aprobado, exceptuando el CBC - ser alumno regular de grado de la Facultad de Ciencias Sociales, UBA - contar con una disponibilidad de 20 hs. por semana',
      visibilidad: false
    }
  ]
  constructor(private router: Router, private pasantiaServeice:PasantiaService ) {}
  ngOnInit(): void {

  }
  optenerPasantias(){
    const data={
sds:''
    }
    const path='/pasantias'
    const id= '0004'
    this.pasantiaServeice.getPasantias(data,path,id);
  }

  seeMore(pasantia){
    pasantia.visibilidad= !pasantia.visibilidad
  }
  postular(pasantia){
    this.router.navigate(['/tabs/tab3',pasantia.id])
  }
}
