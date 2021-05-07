import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pasantia} from '../models/pasantia';
import { PasantiaService } from '../services/pasantia.service';

import 'firebase/firestore';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnChanges{


  description: boolean = false;
  pasantias: Pasantia[]=[];
  emptyList: boolean=false;
  loader: boolean=false;



  private path='pasantias/'
  constructor(private router: Router, private pasantiaServeice:PasantiaService ) {}
  ngOnInit(): void {
    this.getpasantias();
  }


  seeMore(pasantia){
    pasantia.visibilidad= !pasantia.visibilidad
  }
  postular(pasantia){
    this.router.navigate([`/tabs/tab3/${pasantia.correo}`])
  }
  getpasantias(){
    this.pasantiaServeice.getCollectionPasantia<Pasantia>(this.path).subscribe((res)=> {
      if(res){
        this.pasantias=res;
        this.loader=true;

      }
      if(this.pasantias.length==0){
        this.emptyList=true;
      }else{
        this.emptyList=false;
      }
    });
    console.log('PASANTIAS',this.pasantias)


  }
  ngOnChanges(changes: SimpleChanges): void {


  }
}
