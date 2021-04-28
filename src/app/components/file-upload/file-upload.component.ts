import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  barStatus = false;
  fileUpload = [];
  constructor(private firebaseUploadService: FirebaseUploadService) { }

  ngOnInit() {}

  uploadFile(event){
    this.barStatus = true;
    this.firebaseUploadService.storeFile(event.target.files[0]).then((res:any)=>{
      if(res){
        this.barStatus = false;
        this.fileUpload.unshift(res);
        alert("Se subio tu archivo, solo falta mandarlo!")
      }
    },
    (error:any) => {
      this.barStatus = false;
    }
    )
  }

  async sendEmail(){
    await Share.share({
      title:"Learn Ionic Fast",
      text:"Check this"
    });
  }
}
