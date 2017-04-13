import { Routes } from '@angular/router';
import {PersonGraguationComponent} from "./person.graduation.component";
import {PersonQualitiesComponent} from "./person.qualities.component";

export const PERSON_ROUTES : Routes = [
    { path: 'graduate', component: PersonGraguationComponent},
    { path: 'personal', component: PersonQualitiesComponent}
]