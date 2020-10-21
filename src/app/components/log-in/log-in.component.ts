import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usermodel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: Usermodel = new Usermodel();

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.authSrv.logIn(form.value).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('email', resp['email']);
        this.router.navigateByUrl('/counter');
      },
      err => {
        console.log(err.error.error.message);
      }
    );
    form.reset();
  }
}
