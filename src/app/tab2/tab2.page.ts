import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loginForm = new FormGroup({
    nombrePasantia: new FormControl(''),
    empresa: new FormControl(''),
    requisitos: new FormControl(''),
    correoDeContacto: new FormControl(''),
    carrera: new FormControl('')
    });

  constructor() {}

}
