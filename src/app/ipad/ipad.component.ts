import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Ipads } from '../models/ipads.model'
@Component({
  selector: 'app-ipad',
  templateUrl: './ipad.component.html',
  styleUrls: ['./ipad.component.css']
})
export class IpadComponent implements OnInit {
  ipads:Ipads[]=[]
  constructor(private data2:Data2Service) { }
  
  ngOnInit(){
    this.data2.getdata2().subscribe(
      data2=>{
        this.ipads=data2
      },
      err=>{
        console.log('The error  is',err)
      }
    )
  }
}
