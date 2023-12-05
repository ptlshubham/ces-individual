import { Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { SocialActivityComponent } from './social-activity/social-activity.component';
import { NavratriComponent } from './navratri/navratri.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotoContestComponent } from './photo-contest/photo-contest.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home/main',
        pathMatch: 'full',
    },
    // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    { path: 'academic', loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule) },
    { path: 'glory', loadChildren: () => import('./glory/glory.module').then(m => m.GloryModule) },
    { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
    { path: 'home', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
    { path: 'more', loadChildren: () => import('./more/more.module').then(m => m.MoreModule) },
    {
        path: 'alumni',
        component: AlumniComponent
    },
    {
        path: 'social-activity',
        component: SocialActivityComponent
    },
    {
        path: 'navratri',
        component: NavratriComponent
    },
    {
        path: 'photo',
        component: PhotoContestComponent
    },
    {
        path: '**', pathMatch: 'full',
        component: PageNotFoundComponent
    },
];
