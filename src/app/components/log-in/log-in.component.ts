import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usermodel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: Usermodel;

  constructor(
    private authSrv: AuthService
  ) { }

  ngOnInit(): void {
    this.user = new Usermodel();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.authSrv.logIn(form.value).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err.error.error.message);
      }
    )
    form.reset();
  }
}
