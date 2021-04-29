import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  correo: string;
  constructor(private emailComposer: EmailComposer,private route: ActivatedRoute) {
    this.correo='';
  }
  ngOnInit() {
    this.correo = this.route.snapshot.paramMap.get('correo');
    alert(this.correo);
  }

}
