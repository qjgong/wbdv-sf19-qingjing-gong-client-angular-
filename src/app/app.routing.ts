import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseGridComponent} from './CourseGrid/CourseGrid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';

const appRoutes: Routes = [
  {path: 'course', component: CourseGridComponent},
  {
    path: 'course/:courseId/module', component: ModuleListComponent,
    children: [
      {
        path: ':moduleId/lesson', component: LessonTabsComponent,
        children: [
          {
            path: ':lessonId/topic', component: TopicPillsComponent,
            children: [
              {path: ':topicId/widget', component: WidgetListComponent}
            ]
          }
        ]
      }
    ]

  }];
export const routing = RouterModule.forRoot(appRoutes);
