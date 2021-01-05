import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';
import { Router } from '@angular/router'; 
import sweetalert from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username="";
  password="";
  conpass="";
  acntno="";

  constructor(private bankservice:BankService,private router: Router) { }

  ngOnInit(): void {
  }
  onRegClick(){
    this.bankservice.register(this.username,this.password,this.conpass,this.acntno)
    .subscribe((data:any)=>{
    sweetalert.fire("Refistation sucess",data.message,"success")
    this.router.navigateByUrl("/")
    },data=>{
      sweetalert.fire("Registration failed","invalid data","error")
    }
    )}
  onUsernameChange(event:any){
    this.username=event.target.value
  }
  onPasswordChange(event:any){
    this.password=event.target.value
  }
  onConpassChange(event:any){
    this.conpass=event.target.value;
  }
  onAcntnoChange(event:any){
    this.acntno=event.target.value;
  }

}
