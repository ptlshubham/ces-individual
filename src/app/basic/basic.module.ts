import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { BasicRoutes } from './basic.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ManagementComponent } from './management/management.component';
import { FundComponent } from './fund/fund.component';
import { AlumniComponent } from './alumni/alumni.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { CounsellingComponent } from './counselling/counselling.component';




@NgModule({
  declarations: [
    HistoryComponent,
    AboutComponent,
    ManagementComponent,
    FundComponent,
    AlumniComponent,
    CelebrationComponent,
    CounsellingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule
  ]
})
export class BasicModule { }
