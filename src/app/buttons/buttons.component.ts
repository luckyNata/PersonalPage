import {Component, Input, OnInit, Injectable} from '@angular/core';
import {MainService} from "app/shared/main.service";


@Component({
    moduleId: module.id,
    selector: 'buttons',
    templateUrl: 'buttons.component.html',
    styleUrls: ['buttons.component.css']
})
@Injectable()
export class ButtonsComponent implements OnInit{
    @Input() hideFlag;
    // hideFlag: Boolean;
    constructor(private mainService: MainService){}

    // hideThreeButtons(){
    //     this.mainService.hideThreeButtons();
    // }
    ngOnInit(){
        // this.hideFlag =  this.mainService.getFlag();

    }
    hideThreeButtons(){
        // this.mainService.hideThreeButtons();
        this.mainService.changeBtn(true);
        // this.hideFlag =  this.mainService.getFlag();
        // console.log('hideFlag', this.hideFlag);
    }

}
