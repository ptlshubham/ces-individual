import { Routes } from '@angular/router';
import { SetuComponent } from './setu/setu.component';


export const ProjectRoutes: Routes = [{
    path: '',
    children: [
    {
        path: '',
        component: SetuComponent
    }
    ],
    
}];
