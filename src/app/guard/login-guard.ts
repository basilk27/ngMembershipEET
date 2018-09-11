import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard  implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    this.router.navigate(['eetmain']);
    return true;
  }

}
