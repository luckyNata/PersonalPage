import {Component, Injectable, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {LoginService} from '../shared/login.service';
import {MainService} from "../shared/main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit{
  isClosed: boolean = false;
  user: User = {
    username: '',
    userpass: '',
    token: ''
  };
  userpass2: string;
  data;

  constructor(private loginService: LoginService, private mainService: MainService, private router: Router) { }
  ngOnInit(){
    this.loginService.closedPopup.
    subscribe(data => this.isClosed = data);
  }
  logIn(event: Event) {
    event.preventDefault();
    this.isClosed = true;
    this.loginService.login(this.user).subscribe(mas => {
      console.log('test');
      });
    // this.mainService.getData2().subscribe(mas => {
    //   this.data = mas;
    //   console.log(mas);
    // })
    this.router.navigate(['/personal']);
    this.hideThreeButtons();
  }
  checkData() {
    if(this.user.userpass === this.userpass2){
      return true;
    } else {
      return false;
    }
  }

  closePopup(){
    this.isClosed = true;
  }

  hideThreeButtons(){
    this.mainService.changeBtn(true);
  }

}
