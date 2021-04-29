import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileListComponent } from './file-list/file-list.component';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  declarations: [FileListComponent, FileUploadComponent],
  imports: [CommonModule, IonicModule],
  exports: [FileUploadComponent, FileListComponent],
  providers:[EmailComposer]
})
export class ComponentsModule {}
