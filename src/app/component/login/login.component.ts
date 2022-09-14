import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(15)])],
    });
  }

  login(){
    this.userService.getMyInfo(this.loginForm.value.phoneNumber).subscribe( (user) => {
      localStorage.setItem('phoneNumber', user.phoneNumber);
      localStorage.setItem('role', user.role);
      
      console.log(user);

      switch(user.role){
        case "PATIENT": {
          this.router.navigate(['patient-page']);
          break;
        }
        case "DENTIST": {
          this.router.navigate(['dentist-page']);
          console.log()
          break;
        }
      }

    });
  }

}
