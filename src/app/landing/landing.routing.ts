import { Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { ImageSectionComponent } from './image-section/image-section.component';
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
        {
            path: 'more-details',
            component:ImageSectionComponent
        }
    ],

}];
