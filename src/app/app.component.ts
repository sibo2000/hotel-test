import { Hotel } from './hotel.model';
import { HotelService } from './hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Hotel Search';

  constructor(private hotelService: HotelService) { }

  hotels: Hotel[]
  numHotels: number;

  url = 'http://localhost:3000/api/hotels';
  filters = '?name=';
  sort = '&sort=';

  ngOnInit() {
    this.hotelService.getHotels(this.url + this.filters + this.sort)
      .subscribe(
        (hotels: Hotel[]) => {
          this.hotels = hotels;
          this.numHotels = hotels.length;
        }
      )
  }

  handleFiltersUpdated(data) {
    this.filters = 
      '?name=' + data.name
      + '&stars=' + data.stars
      + '&mincost=' + data.minCost
      + '&userrating=' + data.userRating;
    this.ngOnInit();
  }

  handleSortUpdated(data) {     
    this.sort = '&sort=' + data.sortBy;    
    this.ngOnInit();
  }
}
