import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authSrv.logOut();
    this.router.navigateByUrl('/login');
  }

}
