import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ChangePasswordGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    alert('The Change Password component has been implemented but we are redirected to Login page for now...');
    this.router.navigate(['']);
    return false;
  }
}
