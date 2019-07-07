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

  constructor(private service: TopicServiceClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  courseId;
  moduleId;
  lessonId;
  topics;
  selectedTopic = {
    widgets: []
  };

  ngOnInit() {
    this.activatedRoute.pathFromRoot[1].params.subscribe(
      params => {
        this.courseId = params['courseId'];
      });

    this.activatedRoute.pathFromRoot[2].params.subscribe(
      params => {
        this.moduleId = params['moduleId'];
      });

    this.activatedRoute.params.subscribe(
      params => {
        this.lessonId = params['lessonId'];
      });

    this.service.findTopicsForLesson(this.lessonId).then(topics => this.topics = topics);
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }
}
