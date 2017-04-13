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
    name:string;
    surname: string;

    constructor(private mainService: MainService){}

    ngOnInit(){
      this.mainService.getData().subscribe(mas => {
        this.name  = mas.name;
        this.surname  = mas.surname;
      })
    }
    hideThreeButtons(){
        this.mainService.changeBtn(true);
    }

}
