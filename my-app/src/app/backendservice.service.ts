import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
private baseUrl = 'https://localhost:7070/api';
  constructor(private http : HttpClient) { }

 
search(name: string) {
  const apiUrl = `${this.baseUrl}/medicines/Search`;
  const params = { name: name };
  return this.http.get(apiUrl, { params: params });
}

}
