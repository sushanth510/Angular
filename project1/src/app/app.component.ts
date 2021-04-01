import { Component } from '@angular/core';
import { EmployeeDetailsService } from './employee-details.service';

@Component({
  selector: 'app-root',
  template: `<div> {{values}} </div> `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday =new Date()
  power=5
  factor=1
  data:string="";
  public employee:object[]=[]

  toReceiveDataFromChild:any;
  constructor(private _employeeservice:EmployeeDetailsService ){
    this.employee=this._employeeservice.getdata();
    console.log(this.employee[0])
    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
  }
  //ngModule(){
    //
    
  //}
  sendData(v:any){
    this.data=v;
    
  
}
}
