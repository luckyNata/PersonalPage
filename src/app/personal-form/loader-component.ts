import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {HelloWorldComponent} from './hello-world.component';

@Component({
  selector: 'front-place',
  template: `
        <button (click)="createSlim()">Say hello</button>
    `
})
export class LoaderComponent implements OnChanges, OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  private createSlim() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
    // const factory = this.componentFactoryResolver.resolveComponentFactory(SlimFront);
    let ref = this.viewContainerRef.createComponent(factory);
    ref.instance.data = 'abc';
    ref.changeDetectorRef.detectChanges();
  }

  ngOnInit(){

  }
  ngOnChanges(changes: SimpleChanges) {
  }
}
