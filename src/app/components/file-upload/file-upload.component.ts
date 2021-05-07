import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';

const { Share, FileSharer } = Plugins;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  barStatus = false;
  fileUpload = [];
  constructor(
    private firebaseUploadService: FirebaseUploadService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  async uploadFile(event) {
    this.barStatus = true;
    await this.firebaseUploadService.storeFile(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          this.barStatus = false;
          this.fileUpload.unshift(res);
          alert('Se subio tu archivo, solo falta mandarlo!');
        }
      },
      (error: any) => {
        this.barStatus = false;
      }
    );
  }

  /*async shareLocalFile(){
    await this.http.get(this.fileUpload, {responseType: 'blob'})
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1]

        FileSharer.share({
          filename: this.fileUpload,
          base64Data,
          contentType: 'aplication/pdf',
        })
      }
      reader.readAsDataURL(res);
    });
  }*/

  async shareLocalFile() {
    await Share.share({
      title: 'Presentacion para la pasantia',
      text: 'Hola me llamo ... y quiero postularme a la pasantía'
    });
  }
}
