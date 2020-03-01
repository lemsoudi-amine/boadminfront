import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;
  constructor(private service: RestapiService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.username + '  ' + this.password);
    const response = this.service.login(this.username, this.password);
    response.subscribe(data => {
      this.message = data;
      this.router.navigate(['/home']);
    });

  }

}
