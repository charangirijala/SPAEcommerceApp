import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.css']
})
export class MacbookComponent implements OnInit {

  macbooks=[]
  constructor(private data3:Data3Service ){

  }
  ngOnInit() {
    this.data3.getdata3().subscribe(
      data3=>{
        this.macbooks=data3
      },
      err=>{
        console.log('The err',err)
      }
    )
  }

}
