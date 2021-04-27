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
  pasantias: Pasantia[]=[];



  private path='pasantias/'
  constructor(private router: Router, private pasantiaServeice:PasantiaService ) {}
  ngOnInit(): void {
    this.getpasantias();
  }


  seeMore(pasantia){
    pasantia.visibilidad= !pasantia.visibilidad
  }
  postular(pasantia){
    this.router.navigate(['/tabs/tab3',pasantia.id])
  }
  getpasantias(){
    this.pasantiaServeice.getCollectionPasantia<Pasantia>(this.path).subscribe((res)=> {
      this.pasantias=res;
    });
  }
}
