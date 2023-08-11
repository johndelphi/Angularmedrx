import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
private baseUrl = 'https://medrxapi.azurewebsites.net/api';
  constructor(private http : HttpClient) { }

 
search(name: string) {
  const apiUrl = `${this.baseUrl}/medicines/Search`;
  const params = { name: name };
  return this.http.get(apiUrl, { params: params });
}

getSuggestions(searchTerm: string): Observable<string[]> {
  const apiUrl = `${this.baseUrl}/medicines/Search`;

  return this.http.get<string[]>(apiUrl);
}

}
