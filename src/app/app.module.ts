import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelResultsComponent } from './hotel-results/hotel-results.component';
import { HotelSortComponent } from './hotel-sort/hotel-sort.component';
import { HotelService } from './hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelFilterComponent,
    HotelResultsComponent,
    HotelSortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
