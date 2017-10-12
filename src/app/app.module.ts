import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { AppComponent } from './app.component';
import { FlickrService } from 'app/services/flickr.service';
import { StartPageComponent } from './start-page/start-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    AppRoutingModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
