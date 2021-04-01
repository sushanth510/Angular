import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor() { }
  getdata(){
    return [
      {name:"sushanth",age:"19",city:"chennur"},
      {name:"sushanth",age:"19",city:"chennur"},
      {name:"sushanth",age:"19",city:"chennur"},
      {name:"sushanth",age:"19",city:"chennur"}
  ]
  }
}
