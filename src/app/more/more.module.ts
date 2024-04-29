import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus/campus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreRoutes } from './more.routing';
import { SearchComponent } from './search/search.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { NewsComponent } from './news/news.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { DeliveryShippingComponent } from './delivery-shipping/delivery-shipping.component';
import { RefundCancellationComponent } from './refund-cancellation/refund-cancellation.component';
import { PricingStructureComponent } from './pricing-structure/pricing-structure.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';
import { CareerComponent } from './career/career.component';
import { SummerCampComponent } from './summer-camp/summer-camp.component';
import { TendersComponent } from './tenders/tenders.component';


@NgModule({
  declarations: [
    CampusComponent,
    SearchComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    NewsComponent,
    MagazineComponent,
    GatePassComponent,
    DeliveryShippingComponent,
    RefundCancellationComponent,
    PricingStructureComponent,
    AnswerKeyComponent,
    CareerComponent,
    SummerCampComponent,
    TendersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MoreRoutes),
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,  
    DlDateTimePickerModule,
  ],
  exports:[
  ]

})
export class MoreModule { }
