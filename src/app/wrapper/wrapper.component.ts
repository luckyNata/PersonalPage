import {Component, OnInit} from '@angular/core';
import {MainService} from 'app/shared/main.service';
import {DataType} from "app/shared/dataType";
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'wrapper',
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.css']
})

export class WrapperComponent implements OnInit{
    data1: DataType;
    flag: Boolean;
    color: any;
    hideFlag: Boolean;

    constructor(private mainService: MainService,  private router: Router){}
    ngOnInit(){
        this.router.navigate(['']);
        this.changeColor();
        setInterval(() => {
            this.changeColor();
        }, 3000);


        this.mainService.getData()
            .subscribe(mas => {
                this.data1 = mas;
                this.flag = this.data1.flag;
                console.log('data1', mas)
            });


        this.mainService.btnHidden.subscribe(
            data => {this.hideFlag = data;
                console.log('onInit', this.hideFlag);
            }
        )


    }

    changeColor(){
        this.color = this.mainService.changeColor();
    }

}
