import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HotelService {

  private hotels: Hotel[] = []

  constructor(private http: Http) { }

  getHotels(url) {
    return this.http.get(url)
      .map((response: Response) => {
        const hotels = response.json().obj;        
        let transformedHotels: Hotel[] = [];
        for (let hotel of hotels) {
          transformedHotels.push(new Hotel(
            hotel.Distance,
            hotel.EstablishmentId,
            hotel.EstablishmentType,
            hotel.Location,
            hotel.MinCost,
            hotel.Name,
            hotel.Stars,
            hotel.UserRating,
            hotel.UserRatingTitle,
            hotel.UserRatingCount,
            hotel.ImageUrl,
            hotel.ThumbnailUrl
          ));
        }
        this.hotels = transformedHotels;
        
        return transformedHotels;
      })
      
      .catch((error: Response) => {
        return Observable.throw(error);
      })    
  }

}
