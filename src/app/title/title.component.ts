import {
  Component, Input, Output, EventEmitter, OnInit, ContentChild, ViewChild, AfterContentInit,
  AfterViewInit
} from '@angular/core';
import {DataType} from "app/shared/dataType";
import {MainService} from "../shared/main.service";


@Component({
    moduleId: module.id,
    selector: 'main-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css']
})

export class TitleComponent implements OnInit, AfterContentInit, AfterViewInit{
    @Input() flag:Boolean;
    color: String = '';

    @ContentChild('outside') localVar1: HTMLElement;
    @ViewChild('inside') localVar2: HTMLElement;
  constructor(private mainService: MainService){}

  ngOnInit(){
    this.changeColor();
    setInterval(() => {
      this.changeColor();
    }, 3000);
  }
  ngAfterContentInit(){
    console.log('contentInit', this.localVar1);
  }
  ngAfterViewInit(){
    console.log('viewInit', this.localVar1);
  }

  changeColor(){
    this.color = this.mainService.changeColor();
  }

}
