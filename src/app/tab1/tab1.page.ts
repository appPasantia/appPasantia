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
      requisistos:'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,Madison was named the capital of the Wisconsin Territory in 1836.',
      visibilidad: false
    },
    {
      id:12,
      logo:'https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1.png',
      nombre:'Pasantia de mercadeo',
      area:'Finanzas',
      requisistos:'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,Madison was named the capital of the Wisconsin Territory in 1836.',
      visibilidad: false
    }
  ]
  constructor(private router: Router, private pasantiaServeice:PasantiaService ) {}
  ngOnInit(): void {

  }

  seeMore(pasantia){
    pasantia.visibilidad= !pasantia.visibilidad
  }
  postular(pasantia){
    this.router.navigate(['/tabs/tab3',pasantia.id])
  }
}
