import {Component, AfterViewInit} from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
  selector: 'hello-world',
  template: `
        <div>
            Hello, world!, {{name}}
            The answer is: {{getAnswer()}}
        </div>
    `
})
export class HelloWorldComponent implements AfterViewInit {
  private name:string = 'You';
  data: any;

  constructor(private loaderService: LoaderService) {
  }

  ngAfterViewInit(): void {
    this.name = 'Me';
  }

  private getAnswer() {
    return this.loaderService.giveMeTheAnswer();
  }
}
