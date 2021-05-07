import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnDestroy {
  user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit() {
  }

  async onSendEmail(){
    try{
      this.authSvc.sendVerificationEmail();
    } catch(error){
      console.log('Error ->', error); 
    }
  }

  async onVerify(isVerified: boolean){
    const test = await this.authSvc.afAuth.currentUser;
    console.log("sera",this.authSvc.actualUser);
  }

  ngOnDestroy(): void{
    this.authSvc.logout();
  }
}
