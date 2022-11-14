import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { SearchComponent } from './search/search.component';
export const MoreRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'campus',
        component: CampusComponent
    },
    {
        path: 'search/:id',
        component: SearchComponent
    },
    {
        path: 'evalution',
        component: EvalutionComponent
    },
    ]
}];
