import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../State/app.state';
import { Store } from '@ngrx/store';
import { MedicineSearchresults } from '../State/Medicinesearchresults.Actions';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTerm: string = '';
  SearchResults: object[] = [];

  constructor(
    private backendService: BackendserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  onSearch() {
    console.log('Search term:', this.searchTerm);
    this.backendService.search(this.searchTerm).subscribe(response => {
      console.log('Response:', response);
      if (Array.isArray(response)) {
        this.store.dispatch(MedicineSearchresults({ results: response }));
      
     // this.store.dispatch( MedicineSearchresults({results: response}));
      this.router.navigate(['/results']);
      console.log(this.store.select(state => state.search.searchResults));
      }
    });
  }
}
