import { Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
export const LandingRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'main',
            component: MainComponent
        },
        {
            path: 'blog',
            component: BlogComponent
        },
        {
            path: 'blog-details/:id',
            component: BlogDetailsComponent
        },
    ],

}];
