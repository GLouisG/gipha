import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
  }

  search(query: string){
    if(query !== ''){
      this.dataService.searchGifs(query)
    
    }
  }

}
