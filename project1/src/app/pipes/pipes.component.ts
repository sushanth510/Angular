import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  power=5
  factor=1
  birthday =new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
