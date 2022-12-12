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
    console.log(this.signupForm);
  }
}
