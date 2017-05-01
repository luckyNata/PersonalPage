import { Component, OnInit } from '@angular/core';
import {MainService} from "../shared/main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  hidden: boolean;
  openedMenu: boolean;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.mainService.btnHidden.subscribe(res => this.hidden = res);
  }

  saveChanges(){
    this.mainService.changeBtn(false);
    this.router.navigate(['']);
  }
  logOut() {
    this.mainService.changeBtn(false);
    this.router.navigate(['']);
  }
  showRights() {
    console.log('this is other information');
  }
}
