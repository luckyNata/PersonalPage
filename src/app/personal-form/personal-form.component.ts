import { Component, OnInit } from '@angular/core';
import {MainService} from "../shared/main.service";
import {Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  hidden: boolean;
  openedMenu: boolean;
  myForm: FormGroup;
  genders = ['male', 'female'];

  constructor(private mainService: MainService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl(),
      'user-data': new FormGroup({
        experience: new FormControl('',Validators.required, this.myAsyncValidator),
        knowledge: new FormControl('HTML', this.myValidator)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([new FormControl('swimming')])
    });
  }

  myValidator(control: FormControl): {[s:string]: boolean}{
    if(control.value === 'React'){
      return {value: true}
    } else {
      return null;
    }
  }

  myAsyncValidator(control: FormControl): Promise<any>|Observable<any>{
   return new Promise((resolve, reject) => {
     setTimeout(()=>{
       if(control.value === '1'){
         resolve({value: true});
       } else {
         resolve(null);
       }
     }, 2000);
   });
  }
  ngOnInit() {
    this.mainService.btnHidden.subscribe(res => this.hidden = res);
    this.myForm.valueChanges.subscribe(res => console.log('changes:', res));
  }
  addHobby(event){
    event.preventDefault();
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl());
  }

  saveChanges(){

    this.mainService.changeBtn(false);
    this.router.navigate(['']);
  }
  logOut() {
    window.localStorage.removeItem('token');
    this.mainService.changeBtn(false);
    this.router.navigate(['']);
  }
  showRights() {
    console.log('this is other information');
  }
}
