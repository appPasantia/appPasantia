import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [FileListComponent, FileUploadComponent],
  imports: [CommonModule, IonicModule],
  exports: [FileUploadComponent, FileListComponent],
})
export class ComponentsModule {}
