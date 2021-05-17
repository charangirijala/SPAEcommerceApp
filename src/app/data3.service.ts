import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor(private https:HttpClient) { }


  getdata3():Observable<any>{
    return this.https.get<any>('assets/macbooks.json')
  }
}
