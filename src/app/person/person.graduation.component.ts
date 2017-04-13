import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'graduation',
    template: `
            <div class="my_graduation">{{text}}</div>
            `,
    styles: ['']
})

export class PersonGraguationComponent {
    text: String = 'I graduated from NTГГ "KPI"';
}
