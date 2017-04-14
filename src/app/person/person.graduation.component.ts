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
    text: String = 'I graduated from National Technical University of Ukraine "KPI" in which there is <a href="http://ipt.kpi.ua/">Institute of Physics and Technology</a>';
}
