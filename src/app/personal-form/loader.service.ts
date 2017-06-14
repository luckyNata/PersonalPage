import {Injectable} from '@angular/core';

@Injectable()
export class LoaderService {
  private answerToEverything:number = 42; // of course

  giveMeTheAnswer():number {
    return this.answerToEverything;
  }
}
