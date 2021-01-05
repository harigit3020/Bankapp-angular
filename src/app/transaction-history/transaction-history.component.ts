import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  histories=<any[]>([])

  constructor(private bankservice:BankService) { }

  ngOnInit(): void {
    this.bankservice.history()
    .subscribe((data:any)=>{
      this.histories=data.history;
    })

  }

}
