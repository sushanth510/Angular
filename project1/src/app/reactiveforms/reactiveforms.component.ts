import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  checkoutForm : FormGroup
 
  myfrm:any

  submitted = false;
  constructor(private formBuilder:FormBuilder) { 
    this.checkoutForm = formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'email': ['',Validators.required], 
      'quantity': ['',Validators.required], 
      'terms': ['',Validators.requiredTrue],    
    });
  }
  submitVal:boolean=false;
  showData(){
    console.log(this.checkoutForm.value)
    this.myfrm = this.checkoutForm.value;
    this.checkoutForm.reset()
    this.submitVal = true

  }
  ngOnInit(): void {
  }
}
