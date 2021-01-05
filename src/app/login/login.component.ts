import { Component, OnInit, } from '@angular/core';
import sweetalert from 'sweetalert2';
import { BankService } from '../service/bank.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors="";
  
  

  username = "";
  password = "";


  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(4)],]
  });
  constructor(private bankservice: BankService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    if (this.loginForm.valid) {
      this.bankservice.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((data: any) => {
          sweetalert.fire("login sucess", data.message, "success")
          this.router.navigateByUrl("home")
        }, data => {
          sweetalert.fire("login failed", "invalid data", "error")
        });
    }else{
      alert("Invalid details");
    }
  }
}