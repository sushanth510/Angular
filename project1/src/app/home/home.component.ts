import { Component, EventEmitter,Input,Output,OnChanges,SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  public name="";
  data=[]
  @Input() v:any;

  cv:any;
  pv:any;

  //create a custom event
  @Output()  myEvent=new EventEmitter()

  constructor(private ds:DataService){

  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    this.cv=changes.v.currentValue;
    this.pv=changes.v.previousValue

  }
  sendDataToParent(dataFromChild:any){
    //assign job to myEvent
    this.myEvent.emit(dataFromChild);
  }

  ngOnInit():void{
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
