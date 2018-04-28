import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppComponent } from './app.component';
import { FlickerSearchComponent } from './flicker-search/flicker-search.component';
import { FlickrService } from './flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    FlickerSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
