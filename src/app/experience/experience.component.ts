import {Component, OnInit} from '@angular/core';
import {MainService} from "app/shared/main.service";
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'experience.component.html',
    styleUrls: ['../shared/general.css', 'experience.component.css']
})

export class ExperienceComponent implements OnInit{
    experience: string[];

    constructor(private mainService: MainService, private router: Router){}

    ngOnInit(){
        this.mainService.getData().subscribe(mas => {
            this.experience = mas.experience;
        })
    }
    goHome(){
        this.mainService.changeBtn(false);
        // console.log(this.mainService.getFlag());
        this.router.navigate(['']);
    }

}
