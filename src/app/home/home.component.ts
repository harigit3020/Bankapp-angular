import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';
import sweetalert from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usernamedep = "";
  amountdep = "";
  usernamewith = "";
  amountwith = "";
  balance = ""
  depositForm = this.fb.group({
    usernamedep: ["", [Validators.required]],
    amountdep: ["", [Validators.required]]
  });
  withdrawForm = this.fb.group({
    usernamewith: ["", [Validators.required]],
    amountwith: ["", [Validators.required]]
  });

  constructor(private bankservice: BankService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onDeposit() {
    if (this.depositForm.valid) {
      this.bankservice.deposit(this.depositForm.value.usernamedep, this.depositForm.value.amountdep)
        .subscribe((data: any) => {
          this.balance = data.balance;
          sweetalert.fire("Depostit success", data.message, "success")
        }, data => {
          sweetalert.fire("Deposit failed", "invalid data", "error")
        }
        )
    } else {
      alert("invalid details")
    }
  }
  onWithraw() {
    if (this.withdrawForm.valid) {
      this.bankservice.withraw(this.withdrawForm.value.usernamewith, this.withdrawForm.value.amountwith)
        .subscribe((data: any) => {
          this.balance = data.balance;
          sweetalert.fire("Withrawel success", data.message, "success")
        }, data => {
          sweetalert.fire("Withrawel failed", "invalid data", "error")
        }
        )
    }
    else{
      alert("Invalid details")
    }
  }
}

