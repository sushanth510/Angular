import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

export class Employee{
  name:string | undefined;
  age:string | undefined;
  city:string | undefined;
}

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {
  employee:Employee[]
  constructor(private es:EmployeeDetailsService) {
    this.employee=this.es.getdata();
   }

  ngOnInit(): void {
  }

}
