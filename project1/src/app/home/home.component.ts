import { Component, EventEmitter,Input,Output,} from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  public name="";
  
  @Input() v:any;

  cv:any;
  pv:any;

  //create a custom event
  @Output()  myEvent=new EventEmitter()

  constructor(){

  }
  
  
  sendDataToParent(dataFromChild:any){
    //assign job to myEvent
    this.myEvent.emit(dataFromChild);
  }

  ngOnInit():void{
    
   
  }

}
