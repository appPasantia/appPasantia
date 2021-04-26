import { Component, OnInit } from '@angular/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent implements OnInit {
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
        alert("Se mando tu curriculum, Exitos!")
      }
    },
    (error:any) => {
      this.barStatus = false;
    }
    )
  }
}
