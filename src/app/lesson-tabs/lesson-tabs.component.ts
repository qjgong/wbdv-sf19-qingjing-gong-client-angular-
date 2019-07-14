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

  selectedCourseId = 0;
  selectedModuleId = 0;
  selectedLessonId = 0;
  lessons = [];

  constructor(private activatedRoute: ActivatedRoute,
              private lessonService: LessonServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.selectedCourseId = params.courseId;
      this.selectedModuleId = params.moduleId;
      this.selectedLessonId = params.lessonId;
      if (this.selectedModuleId != null) {
        this.lessonService.findLessonsForModule(this.selectedModuleId).then(lessons => this.lessons = lessons);
      }
    });
  }
}
