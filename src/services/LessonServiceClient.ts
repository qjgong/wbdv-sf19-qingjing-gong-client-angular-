
import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons = () => fetch('https://calm-beyond-87471.herokuapp.com/api/lessons').then(response => response.json());

  findLessonsForModule = (moduleId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/modules/' + moduleId + '/lessons').then(response => response.json());

  findLessonById = (lessonId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/lessons/' + lessonId).then(response => response.json());
}
