import {Component, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {


  modules = [];
  selectedCourseId = 0;
  selectedModuleId = 0;
  courseTitle = '';

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.selectedCourseId = params.courseId;
        this.selectedModuleId = params.moduleId;
        this.moduleService.findModulesForCourse(this.selectedCourseId).then(modules => this.modules = modules);
        this.courseService.findCourseById(this.selectedCourseId).then(course => this.courseTitle = course.title);
      });
  }


}
