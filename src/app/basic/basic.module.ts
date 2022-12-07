import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
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




@NgModule({
  declarations: [
    HistoryComponent,
    AboutComponent,
    ManagementComponent,
    FundComponent,
    CelebrationComponent,
    CounsellingComponent,
    BearersComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule,
    NgxPaginationModule
  ]
})
export class BasicModule { }
