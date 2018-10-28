import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  
  @Input() doughnutChartData:number[] = [400, 400, 100];
  @Input() doughnutChartType:string = 'doughnut';

  @Input() doughnutChartLabels:string[] = ['Prueba1', 'Prueba2', 'Prueba3'];
  

  constructor() { }

  ngOnInit() {
  }

}
