import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso1:number = 50;
  progreso2:number = 20
  minBlock:boolean = false;
  maxBlock:boolean = false;
  constructor() { }

  ngOnInit() {
    
  }


}
