import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  errorMessage: string = '';
  constructor(public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/home']);
    })
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/home']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }


  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
