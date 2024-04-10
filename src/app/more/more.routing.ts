import { Routes } from '@angular/router';
import { AnswerKeyComponent } from './answer-key/answer-key.component';
import { CampusComponent } from './campus/campus.component';
import { DeliveryShippingComponent } from './delivery-shipping/delivery-shipping.component';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PricingStructureComponent } from './pricing-structure/pricing-structure.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundCancellationComponent } from './refund-cancellation/refund-cancellation.component';
import { SearchComponent } from './search/search.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CareerComponent } from './career/career.component';
import { SummerCampComponent } from './summer-camp/summer-camp.component';
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
        },
        {
            path:'shipping-policy',
            component:DeliveryShippingComponent
        },
        {
            path:'refund-cancellation-policy',
            component:RefundCancellationComponent
        },
        {
            path:'pricing-structure-for-online-registration',
            component:PricingStructureComponent
        },
        {
            path:'answer-key',
            component:AnswerKeyComponent
        },
        {
            path:'career',
            component:CareerComponent
        },
        {
            path:'summer-camp',
            component:SummerCampComponent
        }
    ]
}];
