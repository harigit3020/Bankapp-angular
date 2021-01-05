import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [(
  {path:'',component:  LoginComponent}),
  ({path:'home',component:HomeComponent}),
  ({path:'register',component: RegisterComponent}),
  ({path:'transaction-history',component:TransactionHistoryComponent}),
  ({path:'users',component:UsersComponent}),
  ({path:'parent',component:ParentComponent}),
  ({path:'child',component:ChildComponent}),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
