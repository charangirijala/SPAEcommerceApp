import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipads } from './models/ipads.model'
@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private http: HttpClient) { }

  getdata2(): Observable<Ipads[]> {
    return this.http.get<Ipads[]>('assets/ipads.json')
  }
}
