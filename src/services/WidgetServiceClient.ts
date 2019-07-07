import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findAllWidgets = () => fetch('https://calm-beyond-87471.herokuapp.com/api/widgets').then(response => response.json());

  findWidgetsForTopic = (topicId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/topics/' + topicId + '/widgets').then(response => response.json());

  findWidgetById = (widgetId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/widgets/' + widgetId).then(response => response.json());
}
