import {ContentChildren, Directive, QueryList} from '@angular/core';
import { ShowOneTriggerDirective } from './show-one-trigger.directive';
import {ShowOneDirective} from "./show-one.directive";

@Directive({
  selector: '[appShowContainer]'
})
export class ShowContainerDirective {

  triggers: ShowOneTriggerDirective[] = [];

  @ContentChildren(ShowOneDirective)
  items: QueryList<ShowOneDirective>;

  add(trigger: ShowOneTriggerDirective){
    this.triggers.push(trigger);
  }
  show(){
    console.log(777);
  }


}
