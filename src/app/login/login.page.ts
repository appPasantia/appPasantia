import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        //TODO: verified the email
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //this.router.navigate(['/tabs'])
        //console.log("user ->", user);

      }
    } catch (error) {
      console.log('Error ->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        //TODO: verified the email
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //this.router.navigate(['/tabs'])
        //console.log("user ->", user);
      }
    } catch (error) {
      this.showLoginError();
      console.log('Error ->', error);

    }
  }

  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(['/tabs']);
    } else {
      //register
      this.router.navigate(['/register']);
    }
  }

  async showLoginError() {
    console.log("showing error");
    const alert = await this.alertController.create({
      header: 'Error al Iniciar sesión',
      subHeader: 'Por favor intente de nuevo en otro momento',
      //message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
