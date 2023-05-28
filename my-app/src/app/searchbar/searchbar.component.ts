import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
searchTerm:string ='';
 constructor(private backendService : BackendserviceService) {}

 onSearch(){
  
  console.log('Search term:', this.searchTerm);
  this.backendService.search(this.searchTerm)
  .subscribe(response => {
    console.log(response);
  })
}
}
