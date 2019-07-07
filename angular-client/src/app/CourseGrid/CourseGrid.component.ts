import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './CourseGrid.component.html',
  styleUrls: ['./CourseGrid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, private router: Router) {
  }

  courses;
  selectedCourse = {
    modules: []
  };
  // selectedLesson = {
  //  // topics: []
  // };
  // selectedTopic = {
  //  // widgets: []
  // };
  // selectedWidget = {};

  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.router.navigate(['/course/', course.id, 'module']);
  }


}
