import { Component, Input, OnInit } from '@angular/core';
import { FirebaseUploadService } from 'src/app/services/firebase-upload.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  barStatus = false;
  fileUpload = [];
  @Input() correo: string = '';
  nombre='';
  //correo='ch.rash37@gmail.com';
  telefono:number;
  postularForm:FormGroup;
  mensaje='Hay una nueva postulación a su pasantía';
  constructor(private emailComposer: EmailComposer,private firebaseUploadService: FirebaseUploadService) { }

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
  enviar() {
    let email = {
      to: 'ch.rash37@gmail.com',
      attachments: [
        'Archivo.png',

      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true,
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }
  public sendEmail(e: Event) {
    console.log(e);
    e.preventDefault();
    emailjs.sendForm('service_5n3w2me', 'template_p2qmxmr', e.target as HTMLFormElement, 'user_h3wl5X7fbp7lUayv6EeT6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  ionViewDidLeave(){
    this.nombre='';
    this.telefono=null;
  }

}
