import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        //TODO: verified the email
        const isVerified =  this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //this.router.navigate(['/tabs'])
        //console.log("user ->", user);

      }
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      if(user){
        //TODO: verified the email
        const isVerified =  this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //this.router.navigate(['/tabs'])
        //console.log("user ->", user);
      }
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }
  async onRegister(email, password){
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        //verified the email
        const isVerified =  this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        //this.router.navigate(['/tabs'])
      }
    } catch (error) {
      console.log( 'Error ->', error )
    }
  }

  private redirectUser(isVerified: boolean){
    if(isVerified){
      this.router.navigate(['/tabs']);
    }else {
      //register
      this.router.navigate(['/register']);
    }
  }

}
