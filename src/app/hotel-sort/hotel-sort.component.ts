import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-sort',
  templateUrl: './hotel-sort.component.html'
})
export class HotelSortComponent implements OnInit {

  @Output() sortUpdated = new EventEmitter();  

  sortForm = new FormGroup({
    sortBy: new FormControl()
  });

  ngOnInit() {
    this.sortForm.valueChanges.subscribe(
      data => this.sortUpdated.emit(data)
    );
  }


}
