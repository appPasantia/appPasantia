import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    });

  constructor() {}

  pasantia(){

  }

  input(){

  }

}
