import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findAllTopics = () => fetch('https://calm-beyond-87471.herokuapp.com/api/topics').then(response => response.json());

  findTopicsForLesson = (lessonId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/lessons/' + lessonId + '/topics').then(response => response.json())

  findTopicById = (topicId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/topics/' + topicId).then(response => response.json())
}
