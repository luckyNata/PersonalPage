import {Directive, HostListener, Input} from '@angular/core';
import {ShowContainerDirective} from './show-container.directive';

@Directive({
  selector: '[appShowOneTrigger]'
})
export class ShowOneTriggerDirective {
  @Input('appShowOneTrigger')
  id: string;
  @Input()
  active = false;

  constructor(private showContainerDirective : ShowContainerDirective ){
    showContainerDirective.add(this);
  }

  @HostListener('click') click(){
      this.showContainerDirective.show();
  }

}
