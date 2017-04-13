import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'qualities',
    template: `
            <div class="my_qualities">{{text}}</div>
            `,
    styles: ['']
})

export class PersonQualitiesComponent {
    text: String = 'I am friendly, honest, responsible';
}