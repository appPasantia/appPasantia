import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
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

  async onLoginGoogle(){
    this.authSvc.loginGoogle().then( () => {
      this.router.navigate(['/tabs']);
    });
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
