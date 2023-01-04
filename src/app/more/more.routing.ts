import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SearchComponent } from './search/search.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
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
            path: 'policy',
            component: PrivacyPolicyComponent
        },
        {
            path: 'terms',
            component: TermsConditionsComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'magazine',
            component: MagazineComponent
        },

        {
            path: 'gate-pass',
            component: GatePassComponent
        }
    ]
}];
