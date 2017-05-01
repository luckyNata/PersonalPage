import { Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
  closedPopup = new EventEmitter<boolean>();
  apiUrl = 'api/data1';
  apiLogUrl = 'api/data2';
  isLogged = false;
  serviceUser;

  constructor(private http:  Http, private router: Router) { }

  login(user: User): Observable <any> {
    // let body: any = 'name='+user.username+'&pass='+user.userpass;
    // console.log(body);
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});


    return this.http.post(this.apiLogUrl, body, { headers: headers })
      .map(res => { res.json();
            console.log('res of login',res.json());
            // if(res.json()){
            //
            //   this.serviceUser = res.json().data;
            //   console.log(this.serviceUser);
            //
            // } else {
            //   console.log('bad request');
            // }
          });
    /////////////////////////////////////////////////
    // return this.http.get(this.apiLogUrl)
    //   .map(res => {
    //     console.log('res of login',res.json());
    //     if(res.json()){
    //
    //       this.serviceUser = res.json().data;
    //       console.log(this.serviceUser);
    //
    //     } else {
    //       console.log('bad request');
    //     }
    //   });
  }

  catchError(error: any){
    return Observable.throw(error.message || error);
  }
  setIsClosed (value){
    this.closedPopup.emit(value);
  }
  isLoggedUser(){
    //запрос к серверу, зарегистрирован пользователь или нет
    return true;
  }

}
