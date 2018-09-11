import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ChangePasswordGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    alert('Not implemented yet, redirected to Login page');
    this.router.navigate(['']);
    return false;
  }
}
