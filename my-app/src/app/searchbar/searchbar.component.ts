import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { debounceTime, switchMap } from 'rxjs/operators';
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
  isLoading: boolean = false;
  suggestons$: Observable<string[]>;

  constructor(
    private backendService: BackendserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.suggestons$ = of(this.searchTerm).pipe(
      debounceTime(300), // delay for user input
      switchMap(term => this.backendService.getSuggestions(term))
    );
  }

  onSearch() {
    this.isLoading = true;

    console.log('Search term:', this.searchTerm);
    this.backendService.search(this.searchTerm).subscribe(response => {
      console.log('Response:', response);
      if (Array.isArray(response)) {
        this.store.dispatch(MedicineSearchresults({ results: response }));
        this.router.navigate(['/results']);
        console.log(this.store.select(state => state.search.searchResults));
      }
      
      this.isLoading = false; // Stop loading screen after results are displayed
    });
  }
}
