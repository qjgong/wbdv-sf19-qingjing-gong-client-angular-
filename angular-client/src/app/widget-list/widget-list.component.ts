import {Component, OnInit} from '@angular/core';
import {TopicServiceClient} from '../../services/TopicServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  widgets = [];

  ngOnInit() {
    this.activatedRoute.pathFromRoot[1].params.subscribe(
      params => {
        this.courseId = params['courseId'];
      });

    this.activatedRoute.pathFromRoot[2].params.subscribe(
      params => {
        this.moduleId = params['moduleId'];
      });

    this.activatedRoute.pathFromRoot[3].params.subscribe(
      params => {
        this.lessonId = params['lessonId'];
      });
    this.activatedRoute.params.subscribe(
      params => {
        this.topicId = params['topicId'];
      });
    this.service.findWidgetsForTopic(this.topicId).then(widgets => this.widgets = widgets);
  }


}
