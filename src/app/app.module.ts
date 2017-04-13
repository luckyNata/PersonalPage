import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryDb } from "./shared/data.service";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MainService } from "./shared/main.service";
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { PersonComponent } from './person/person.component';
import { ExperienceComponent } from './experience/experience.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TodoListComponent } from './todoList/todo-list.component';
import { KnowledgeComponent } from "./knowledge/knowledge.component";
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import {PersonQualitiesComponent} from "./person/person.qualities.component";
import {PersonGraguationComponent} from "./person/person.graduation.component";
import {SocialComponent} from "./social/social.component";


@NgModule({
  imports:      [BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDb), RouterModule, routing],
  declarations: [AppComponent, TitleComponent, PersonComponent, KnowledgeComponent, ButtonsComponent,
    ExperienceComponent, WrapperComponent, PersonQualitiesComponent, PersonGraguationComponent,
    TodoListComponent, SocialComponent
  ],
  providers:    [MainService],
  bootstrap:    [AppComponent]
})
export class AppModule { }
