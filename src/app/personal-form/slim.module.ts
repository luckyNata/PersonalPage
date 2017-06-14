import { NgModule } from '@angular/core';
import {LoaderComponent} from './loader-component';
import {LoaderService} from './loader.service';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [LoaderComponent, HelloWorldComponent],
  entryComponents: [HelloWorldComponent],
  providers: [LoaderService],
  exports: [LoaderComponent]
})
export class LoaderModule {
}
