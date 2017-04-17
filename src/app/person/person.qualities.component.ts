import {Component, OnInit} from '@angular/core';
import {MainService} from "../shared/main.service";


@Component({
    moduleId: module.id,
    selector: 'qualities',
    template: `
            <div class="my_qualities">{{text}}</div>
            `,
    styles: [`
      .my_qualities {
        font: 16px Tahoma;
        line-height: 23px;
        text-align: left;
        text-indent: 20px;
      }
    `]
})

export class PersonQualitiesComponent implements OnInit{
  text: String = '';
  constructor(private mainService: MainService){}

  ngOnInit(){
    this.mainService.getData().subscribe(mas => {
      this.text = mas.personalSkills;
    })
  }
}
