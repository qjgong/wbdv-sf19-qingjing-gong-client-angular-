import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/courses').then(response => response.json());

  findCourseById = (courseId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/courses/' + courseId).then(response => response.json());

}
