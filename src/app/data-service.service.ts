import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';//import from angular
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {//inject allows for comm with the api
  }
  getTrendings(){
    const {apiKey} = environment;
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`);
  }
}
