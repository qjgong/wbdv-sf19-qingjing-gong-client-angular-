import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CourseGridComponent} from './CourseGrid/CourseGrid.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
