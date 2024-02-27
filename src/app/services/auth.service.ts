import { Injectable } from '@angular/core';
import { SharedService } from 'mfe-shared-services-test';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedStateObs = new BehaviorSubject<boolean>(false);

  loggedState$ = this.loggedStateObs.asObservable();

  constructor(private service: SharedService) { }

  login () {
    this.service.login().subscribe( res => {
      this.loggedStateObs.next(res);
    });
  }

  logout() {
    this.service.logout().subscribe( res => {
      this.loggedStateObs.next(res);
    });
  }
}
