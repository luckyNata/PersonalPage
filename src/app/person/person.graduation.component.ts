import {Component, OnInit} from '@angular/core';
import {MainService} from "../shared/main.service";


@Component({
  moduleId: module.id,
  selector: 'graduation',
  template: `
    <div class="my_graduation">{{graduation}}</div>
  `,
  styles: [`
    .my_graduation {
      font: 16px Tahoma;
      line-height: 23px;
      text-align: left;
      text-indent: 20px;
    }
  `]
})

export class PersonGraguationComponent implements OnInit {
  graduation: String = '';

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getData().subscribe(mas => {
      this.graduation = mas.graduation;
    })
  }
}
