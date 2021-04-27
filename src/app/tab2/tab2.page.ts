import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PasantiaService } from '../services/pasantia.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loginForm = new FormGroup({
    nombre: new FormControl(''),
    empresa: new FormControl(''),
    requisistos: new FormControl(''),
    correo: new FormControl(''),
    area: new FormControl(''),
    logo:new FormControl(''),
    });

    private path='pasantias/'
  constructor(private router: Router,private pasantiaServeice:PasantiaService ) {

  }

  pasantia(){

  }

  input(){

  }
  guardarPasantia(){

    const id= this.pasantiaServeice.getID();
    this.pasantiaServeice.createPasantias(this.loginForm.value,this.path,id);
    this.router.navigate(['/tabs/tab1'])
    console.log('form',this.loginForm.value)
  }

}
