import {Injectable} from '@angular/core';



@Injectable()
export class ModuleServiceClient {
  findAllModules = () => fetch('https://calm-beyond-87471.herokuapp.com/api/modules').then(response => response.json());

  findModulesForCourse = (courseId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/courses/' + courseId + '/modules').then(response => response.json());

  findModuleById = (moduleId) =>
    fetch('https://calm-beyond-87471.herokuapp.com/api/modules/' + moduleId).then(response => response.json());
}
