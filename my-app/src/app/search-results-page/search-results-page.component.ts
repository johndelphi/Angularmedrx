
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.searchResults$ = this.store.select(state => state.search.searchResults);
  }

  ngOnInit(): void {

    //this.searchResults$.subscribe(results => console.log(results));
    this.searchResults$ = this.store.select(state => state.search.searchResults);
    this.searchResults$.subscribe(results => console.log(results));
    console.log(this.store.select(state => state.search.searchResults));
    const stateData = history.state;
   
    if (stateData && stateData.searchResults) {
      const searchResults = stateData.searchResults;
      this.store.dispatch(MedicineSearchresults({ results: searchResults }));
    }
  }
}
