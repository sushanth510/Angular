import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export class Data{
  userId:number | undefined;
  id:number | undefined;
  title:string | undefined;
  body:string | undefined;
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  data:Data[] | undefined;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    console.log("this is ngOnInit")
    this.ds.getData().subscribe(
      res=>{
        this.data=res;
      },
      err=>{
        alert("Something went wrong")
        console.log("the error is",err)
      }
      
    )
  }

}
