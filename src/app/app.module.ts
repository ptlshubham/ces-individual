import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AlumniComponent } from './alumni/alumni.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { SocialActivityComponent } from './social-activity/social-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumniComponent,
    SocialActivityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true, scrollPositionRestoration: 'enabled'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    CarouselModule,
    DlDateTimeDateModule,  
    DlDateTimePickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
