import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DataType} from "app/shared/dataType";


@Component({
    moduleId: module.id,
    selector: 'main-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css']
})

export class TitleComponent{
    @Input() flag:Boolean;
    @Input() myDynamicColor: String;
    @Output() onChange = new EventEmitter();

    changeCol(){
        this.onChange.emit();
    }
}
