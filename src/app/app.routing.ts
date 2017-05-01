import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PERSON_ROUTES } from './person/person.routes';
import { PersonComponent } from './person/person.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ExperienceComponent } from './experience/experience.component';
import { LoginComponent } from './login/login.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import {AuthGuard} from './shared/auth-guard';

const appRoutes : Routes = [
    { path: 'about', component: PersonComponent},
    { path: 'about', component: PersonComponent, children: PERSON_ROUTES },
    { path: 'knowledge', component: KnowledgeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'login', component: LoginComponent },
    { path: 'personal', component: PersonalFormComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
