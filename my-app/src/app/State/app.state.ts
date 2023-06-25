export interface SearchState {
    searchResults: any[];
    searchTerm: string;
    // Add other properties related to search state if needed
  }
  
  export interface AppState {
    search: SearchState;
   
    // Add other state properties if needed
  }