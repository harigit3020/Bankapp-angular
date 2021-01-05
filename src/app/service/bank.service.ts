import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = "http://localhost:4000";
@Injectable({
  providedIn: 'root'
})

export class BankService {
  constructor(private http: HttpClient) { }
  login(username: any, password: any) {
    return this.http.post(baseUrl + "/users/login", {
      username,
      password
    }, { withCredentials: true });
  }
  deposit(usernamedep: any, amountdep: any) {
    return this.http.post(baseUrl + "/users/deposit", {
      usernamedep,
      amountdep
    }, { withCredentials: true });
  }
  withraw(usernamewith: any, amountwith: any) {
    return this.http.post(baseUrl + "/users/withraw", {
      usernamewith,
      amountwith
    }, { withCredentials: true });
  }
  register(username:any,password:any,conpass:any,acntno:any){
    return this.http.post( baseUrl + "/users/register", {
        username,
        password,
        conpass,
        acntno,
      }, { withCredentials: true });
  }
  history(){
    return this.http.get(baseUrl+"/users/transactionhistory",{withCredentials:true})
  }
  users(){
    return this.http.get(baseUrl+"/users/",{withCredentials:true})
  }
  deleteUser(id:any){
    return this.http.delete(baseUrl+"/users/"+id,{withCredentials:true})
  }
}
