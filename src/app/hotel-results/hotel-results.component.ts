import { Hotel } from './../hotel.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.component.html'
})
export class HotelResultsComponent implements OnInit {

  Arr = Array;

  @Input() hotels: Hotel[]
  

  ngOnInit() {
    
  }

}
