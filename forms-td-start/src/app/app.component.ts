import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  submitted: boolean = false;
  user = {
    username: '',
    email:'',
    secret:'',
    answer:'',
    gender:''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // Three ways to modify a part of the form. 1) Using two-way binding.
    // 2) Using setValue() to set values for the whole form:
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'heredia@hotmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    // 3) Using form.patchValue() to modify only N parts of the form:
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  // onSubmit(form: HTMLFormElement){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted=true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    // Notice that the argument after "value" is the name assigned in the HTML template:
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    // The reset option is like setValue, so specific fields can be passed as a JS object with the purpose of only resetting those fields. 
    // Reset not only clean the fields in the form, but also reset the values in the HTML code (browser).
    this.signupForm.reset();
  }
}
