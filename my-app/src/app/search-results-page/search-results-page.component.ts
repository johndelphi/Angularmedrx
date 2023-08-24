
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState, SearchState } from '../State/app.state';
import { Store } from '@ngrx/store';
import { MedicineSearchresults } from '../State/Medicinesearchresults.Actions';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {
  searchResults$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router:Router) {
    this.searchResults$ = this.store.select(state => state.search.searchResults);
  }

  ngOnInit(): void {
    const stateData = history.state;
  
    if (stateData && stateData.searchResults) {
      const searchResults = stateData.searchResults;
      this.store.dispatch(MedicineSearchresults({ results: searchResults }));
    } else {
      this.searchResults$.subscribe(results => {
        if (!results || results.length === 0) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
  
     
  
}
