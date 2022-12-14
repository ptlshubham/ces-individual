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



@NgModule({
  declarations: [
    CampusComponent,
    SearchComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MoreRoutes),
    NgbModule,
  ]
})
export class MoreModule { }
