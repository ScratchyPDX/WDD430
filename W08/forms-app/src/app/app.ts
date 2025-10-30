import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion='pet';
  answer='';
  genders=['male','female'];
  user: {
    username: string,
    email: string,
    secretQuestion: string,
    questionAnswer: string,
    gender: string
  };
  submitted = false;

  suggestUserName() {
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Superuser',
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);

  // }

  onSubmit() {
    console.log(this.signupForm);
    this.user = {
      username: this.signupForm.value.userData.username,
      email: this.signupForm.value.userData.email,
      secretQuestion: this.signupForm.value.secret,
      questionAnswer: this.signupForm.value.questionAnswer,
      gender: this.signupForm.value.gender
    };
    this.submitted = true;
    this.signupForm.reset();
  }
}
