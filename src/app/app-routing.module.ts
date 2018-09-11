import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordGuard } from './guard/change-password-guard';

const routes: Routes = [
  { path: '',               component: LoginComponent },
  { path: 'changepassword', component: ChangePasswordComponent,
        canActivate: [ChangePasswordGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
