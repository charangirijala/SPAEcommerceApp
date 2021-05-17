import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
import { Iphones } from '../models/iphones.model';

@Component({
  selector: 'app-iphones',
  templateUrl: './iphones.component.html',
  styleUrls: ['./iphones.component.css']
})
export class IphonesComponent implements OnInit {
  iphones:Iphones[]=[]
  constructor(private data1:Data1Service){
    
  }
  ngOnInit(){
    this.data1.GetData1().subscribe(
      data1=>{
        this.iphones=data1
      },
      err=>{
        console.log(err)
      }
    );
  }

}
