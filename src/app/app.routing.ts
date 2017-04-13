import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PERSON_ROUTES } from './person/person.routes';
import { PersonComponent } from './person/person.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes : Routes = [
    { path: 'about', component: PersonComponent},
    { path: 'about', component: PersonComponent, children: PERSON_ROUTES },
    { path: 'knowledge', component: KnowledgeComponent },
    { path: 'experience', component: ExperienceComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);