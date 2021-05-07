import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  correo: string;
  constructor(private route: ActivatedRoute) {
    this.correo='';
  }
  ngOnInit() {
    this.correo = this.route.snapshot.paramMap.get('correo');
    alert(this.correo);
  }

}
