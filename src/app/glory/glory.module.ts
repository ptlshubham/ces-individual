import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldComponent } from './old/old.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { GloryRoutes } from './glory.routing';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    OldComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(GloryRoutes),
    NgxPaginationModule
    
  ]
})
export class GloryModule { }
