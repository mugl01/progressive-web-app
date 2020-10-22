import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.calculateDate();
  }

  logOut() {
    this.authSrv.logOut();
    this.router.navigateByUrl('/login');
  }

  calculateDate() {
    let differenceMilliSeconds: number;

    const user = JSON.parse(localStorage.getItem('user'));
    const lastUser = JSON.parse(localStorage.getItem('lastUser'));
    if (user.email === lastUser.email && user.dateAccess !== lastUser.dateAccess) {
      differenceMilliSeconds = user.dateAccess - lastUser.dateAccess;
    }

    this.days = Math.floor(differenceMilliSeconds / (24 * 60 * 60 * 1000));
    if (this.days < 0) {
      this.days = 0;
    }
    differenceMilliSeconds -= this.days * 24 * 60 * 60 * 1000;

    this.hours = Math.floor(differenceMilliSeconds / (60 * 60 * 1000));
    if (this.hours < 0) {
      this.hours = 0;
    }
    differenceMilliSeconds -= this.hours * 60 * 60 * 1000;

    this.minutes = Math.floor(differenceMilliSeconds / (60 * 1000));
    if (this.minutes < 0) {
      this.minutes = 0;
    }
    differenceMilliSeconds -= this.minutes * 60 * 1000;

    this.seconds = Math.floor(differenceMilliSeconds / (1000));
  }
}

