
import {Http} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {DataType} from "./dataType";
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs";

@Injectable()
export class MainService {
    btnHidden = new EventEmitter<boolean>();

    constructor(private http: Http, private router: Router){}

    getData() : Observable {
        return this.http.get('api/data1')
            .map(res => res.json().data)
            .catch(this.catchError);
    }

    changeColor(){
            let colors = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            let color = '';
            for (let j = 0; j < 6; j++) {
                let i = Math.floor(Math.random() * colors.length);
                color += colors[i];
            }
            return color;
    }

    catchError(error: any){
        console.error(error.message || error);
    }

    changeBtn(value: boolean){
        this.btnHidden.emit(value);
    }

}