import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGaurd: CanActivateFn = () => {
  const service = inject(AuthService);
  const router = inject(Router);
  let loggedState: boolean = false;
  service.loggedState$.subscribe(res => loggedState = res);
  if(loggedState) {
    return loggedState
  } else {
    router.navigateByUrl('/');
    return loggedState;
  }
};
