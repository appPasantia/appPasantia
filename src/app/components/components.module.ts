import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PhotoListComponent, PhotoUploadComponent],
  imports: [CommonModule, IonicModule],
  exports: [PhotoListComponent, PhotoUploadComponent],
})
export class ComponentsModule {}
