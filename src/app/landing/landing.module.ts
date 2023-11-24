import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutes } from './landing.routing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { StatisticsIncrementorComponent } from './statistics-incrementor/statistics-incrementor.component';
import { AcademicCategoriesComponent } from './academic-categories/academic-categories.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { SectionCourseComponent } from './section-course/section-course.component';
import { CompetitionCertificateComponent } from './competition-certificate/competition-certificate.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { TextImageComponent } from './text-image/text-image.component';
import { NewsMessageComponent } from './news-message/news-message.component';
import { FacebookFeedComponent } from './facebook-feed/facebook-feed.component';
import { RahotkarshFundComponent } from './rahotkarsh-fund/rahotkarsh-fund.component';
import { MainComponent } from './main/main.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { ImageSectionComponent } from './image-section/image-section.component';
import { HistoryVjComponent } from './history-vj/history-vj.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeSliderComponent,
    StatisticsIncrementorComponent,
    AcademicCategoriesComponent,
    SectionMessageComponent,
    SectionCourseComponent,
    CompetitionCertificateComponent,
    HomeBannerComponent,
    ImageTextComponent,
    TextImageComponent,
    NewsMessageComponent,
    FacebookFeedComponent,
    RahotkarshFundComponent,
    BlogDetailsComponent,
    BlogComponent,
    ImageSectionComponent,
    HistoryVjComponent,
    JobsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRoutes),
    SharedModule,
    NgbModule,
    CarouselModule,
    PdfViewerModule
  ],
  exports:[
    MainComponent,
    HomeSliderComponent,
    StatisticsIncrementorComponent,
    AcademicCategoriesComponent,
    SectionMessageComponent,
    SectionCourseComponent,
    CompetitionCertificateComponent,
    RahotkarshFundComponent
  ],
})
export class LandingModule { }
