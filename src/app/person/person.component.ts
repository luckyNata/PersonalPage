import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { MainService } from 'app/shared/main.service'

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'person.component.html',
    styleUrls: ['../shared/general.css', 'person.component.css']
})

export class PersonComponent {
    constructor(private mainService: MainService, private router: Router){}

    goHome(){
        this.mainService.changeBtn(false);
        // console.log(this.mainService.getFlag());
        this.router.navigate(['']);
    }
}
