import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html'
})
export class HotelFilterComponent implements OnInit {

  @Output() filtersUpdated = new EventEmitter();

  filterForm = new FormGroup({
    name: new FormControl(''),
    stars: new FormControl(''),
    userRating: new FormControl(''),
    minCost: new FormControl('')
  });

  ngOnInit() {
    this.filterForm.valueChanges.subscribe(
      data => this.filtersUpdated.emit(data)
    );
  }

}
