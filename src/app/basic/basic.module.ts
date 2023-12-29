import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HistoryComponent } from './history/history.component';
import { BasicRoutes } from './basic.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ManagementComponent } from './management/management.component';
import { FundComponent } from './fund/fund.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { BearersComponent } from './bearers/bearers.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DonnerListComponent } from './donner-list/donner-list.component';
import { BeneficiaryStudentsComponent } from './beneficiary-students/beneficiary-students.component';
import { MicroDonationComponent } from './micro-donation/micro-donation.component';
import { MicroDonnerListComponent } from './micro-donner-list/micro-donner-list.component';




@NgModule({
  declarations: [
    // HistoryComponent,
    AboutComponent,
    ManagementComponent,
    FundComponent,
    CelebrationComponent,
    CounsellingComponent,
    BearersComponent,
    ContactComponent,
    DonnerListComponent,
    BeneficiaryStudentsComponent,
    MicroDonationComponent,
    MicroDonnerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule,
    NgxPaginationModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ]

})
export class BasicModule { }
