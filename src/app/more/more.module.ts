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
