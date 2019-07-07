import {Component, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {


  constructor(private service: ModuleServiceClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  courseId;
  modules;
  selectedModule = {
    lessons: []
  };


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.courseId = params['courseId']);
    this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
  }

  selectModule(module) {
    this.selectedModule = module;
    this.router.navigate(['/course/', this.courseId, 'module', module.id, 'lesson']);
  }


}
