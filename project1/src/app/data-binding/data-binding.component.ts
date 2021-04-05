import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  data:string;
  toReceiveDataFromChild:any;
  ngOnInit(): void {
  }
  sendData(v:any){
    this.data=v;
  }

}
