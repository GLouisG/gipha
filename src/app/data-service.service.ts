import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';//import from angular
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  gifs = new BehaviorSubject<any>([]);//Deals with data states initially empty
  limit : number = 25;
  constructor(private http: HttpClient) {//inject allows for comm with the api
  }
  

  giveIncrease(){
    console.log(this.limit);
   return this.limit+=10;
  } 
  
  getTrendings(){
    const {apiKey} = environment;
    console.log(this.limit);
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${this.limit}}&rating=g`).subscribe((response: any)=>{
    this.gifs.next(response.data);
    });
  }
  searchGifs(gifName: string){
    const {apiKey} = environment;
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${apiKey}&limit=25&rating=g`).subscribe((response: any)=>{
      this.gifs.next(response.data);
      });
  }
  getGifs(){
    return this.gifs.asObservable();//allows us to detect a change and use to update data
  }
}
