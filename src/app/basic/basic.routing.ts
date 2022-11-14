import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlumniComponent } from './alumni/alumni.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { FundComponent } from './fund/fund.component';
import { HistoryComponent } from './history/history.component';
import { ManagementComponent } from './management/management.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'fund',
        component: FundComponent
    },
    {
        path: 'alumni',
        component: AlumniComponent
    },
    {
        path: 'celebration',
        component: CelebrationComponent
    },
    {
        path: 'counselling',
        component: CounsellingComponent
    }
    ]
}];
