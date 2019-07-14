import {Component, OnInit} from '@angular/core';
import {LessonServiceClient} from '../../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicServiceClient} from '../../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId = 0;
  moduleId = 0;
  lessonId = 0;
  topicId = 0;
  topics = [];

  constructor(private topicService: TopicServiceClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      if (this.lessonId != null) {
        this.topicService.findTopicsForLesson(this.lessonId).then(topics => this.topics = topics);
      }
    });
  }
}
