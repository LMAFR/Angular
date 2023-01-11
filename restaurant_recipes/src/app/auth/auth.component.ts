import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isLoginMode:boolean = false;
  isLoading:boolean = false;
  error:string=null;

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    if (!form.valid) {
      // This should not happen, but just in case we define this behaviour.
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      // 
    } else {
      this.authService.signup(email,password).subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.error = 'An error occurred!';
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
