import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BearersComponent } from './bearers/bearers.component';
import { BeneficiaryStudentsComponent } from './beneficiary-students/beneficiary-students.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { ContactComponent } from './contact/contact.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { DonnerListComponent } from './donner-list/donner-list.component';
import { FundComponent } from './fund/fund.component';
// import { HistoryComponent } from './history/history.component';
import { ManagementComponent } from './management/management.component';
import { MicroDonationComponent } from './micro-donation/micro-donation.component';
import { MicroDonnerListComponent } from './micro-donner-list/micro-donner-list.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
        // {
        //     path: 'history',
        //     component: HistoryComponent
        // },
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
            path: 'celebration',
            component: CelebrationComponent
        },
        {
            path: 'counselling',
            component: CounsellingComponent
        },
        {
            path: 'bearers',
            component: BearersComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: 'beneficiary-students',
            component: BeneficiaryStudentsComponent
        },
        {
            path: 'donner-list',
            component: DonnerListComponent
        },
        {
            path: 'donation',
            component: MicroDonationComponent
        }, 
        {
            path: 'micro-donner',
            component: MicroDonnerListComponent
        }
    ]
}];
