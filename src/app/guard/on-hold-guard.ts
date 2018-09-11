import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class OnHoldGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    alert('No Hold at the moment, redirected to Login page');
    this.router.navigate(['']);
    return false;
  }
}
