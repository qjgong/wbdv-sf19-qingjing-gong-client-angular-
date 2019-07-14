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

  widgets = [];
  selectedTopicId = 0;

  constructor(private widgetService: WidgetServiceClient,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.selectedTopicId = params.topicId;
      if (this.selectedTopicId != null) {
        this.widgetService
          .findWidgetsForTopic(this.selectedTopicId).then(widgets => {
          this.widgets = widgets;
        });
      }
    });
  }

}
