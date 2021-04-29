import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[EmailComposer]
})
export class Tab3PageRoutingModule {}
