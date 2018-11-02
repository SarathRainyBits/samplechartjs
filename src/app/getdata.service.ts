import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http:HttpClient) { }
  public getStories()
    {
       return this.http
            .get('./assets/sampleScaaData.json');
    }

}
