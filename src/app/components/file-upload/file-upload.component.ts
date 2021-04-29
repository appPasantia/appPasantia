import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  barStatus = false;
  fileUpload = [];
  file: any = '';
  @Input() correo: string = '';
  constructor(private firebaseUploadService: FirebaseUploadService,private emailComposer: EmailComposer) {}

  ngOnInit() {}

  uploadFile(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeFile(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          this.barStatus = false;
          this.fileUpload.unshift(res);
          alert('Se mando tu curriculum, Exitos!');
        }
      },
      (error: any) => {
        this.barStatus = false;
      }
    );
    this.file = event.target.files[0];
  }
  enviar() {


    let email = {
      to: this.correo,
      attachments: [
        this.file,

      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true,
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
