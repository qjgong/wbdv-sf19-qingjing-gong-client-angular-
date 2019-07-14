
import {Routes, RouterModule} from '@angular/router';
import {CourseGridComponent} from './CourseGrid/CourseGrid.component';

import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CourseGridComponent},
  {path: 'courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets', component: CourseViewerComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
