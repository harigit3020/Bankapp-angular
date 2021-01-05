import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';
import sweetalert from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=<any[]>([])

  constructor(private bankservice:BankService) { }

  ngOnInit(): void {
   this.loadUsers();
  }
  loadUsers(){
    this.bankservice.users()
    .subscribe((data:any)=>{
      this.users=data.users;
    })

  }
  deleteUser(id:any){
    this.bankservice.deleteUser(id)
    .subscribe((data:any)=>{
      sweetalert.fire("User deleted successfully",data.message,"success")
      this.loadUsers()
    }),
    (data:any)=>{
      sweetalert.fire("Delete failed","invalid input","error")
    }
  }

}
