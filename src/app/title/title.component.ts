import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {DataType} from "app/shared/dataType";
import {MainService} from "../shared/main.service";


@Component({
    moduleId: module.id,
    selector: 'main-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css']
})

export class TitleComponent implements OnInit{
    @Input() flag:Boolean;
    color: String = '';
  constructor(private mainService: MainService){}

  ngOnInit(){
    this.changeColor();
    setInterval(() => {
      this.changeColor();
    }, 3000);
  }

  changeColor(){
    this.color = this.mainService.changeColor();
  }

}
