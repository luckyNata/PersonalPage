import {Component, OnInit} from '@angular/core';
import {MainService} from 'app/shared/main.service';
import {DataType} from "app/shared/dataType";
import {Router} from '@angular/router';
import {LoginService} from "../shared/login.service";

@Component({
    moduleId: module.id,
    selector: 'wrapper',
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.css']
})

export class WrapperComponent implements OnInit{
    data1: DataType;
    flag: Boolean;
    hideFlag: Boolean;
    images:Array<any> = [{"sType":"img","imgSrc":"https://pp.userapi.com/c416429/v416429967/4c78/SWeSCTH0lM4.jpg"},{"sType":"img","imgSrc":"https://images.pexels.com/photos/40870/cube-game-cube-instantaneous-speed-pay-40870.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"},{"sType":"div","content":"Hello It's slidable content"}];

    constructor(private mainService: MainService,  private router: Router, private loginService: LoginService){}
    ngOnInit(){
        this.router.navigate(['']);
        // this.changeColor();
        // setInterval(() => {
        //     this.changeColor();
        // }, 3000);


        this.mainService.getData()
            .subscribe(mas => {
                this.data1 = mas;
                this.flag = this.data1.flag;
            });


        this.mainService.btnHidden.subscribe(
            data => {this.hideFlag = data;
                console.log('onInit', this.hideFlag);
            }
        )
    }
    openPopup(){
      this.loginService.setIsClosed(false);
    }
    // changeColor(){
    //     this.color = this.mainService.changeColor();
    // }



}
