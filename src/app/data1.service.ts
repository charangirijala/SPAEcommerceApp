import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iphones } from './models/iphones.model';
@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private hc:HttpClient) { }
  
  GetData1():Observable<Iphones[]>{
    return this.hc.get<Iphones[]>('assets/iphones.json')
  }
}
