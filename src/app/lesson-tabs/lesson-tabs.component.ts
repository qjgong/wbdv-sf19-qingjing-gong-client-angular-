import {Component, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonServiceClient} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  courseId;
  moduleId;
  lessons;
  selectedLesson = {
    topics: []
  };

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(
      params => {
        this.courseId = params['courseId'];
      });
    this.activatedRoute.params.subscribe(
      params => {
        this.moduleId = params['moduleId'];
      });
    this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
