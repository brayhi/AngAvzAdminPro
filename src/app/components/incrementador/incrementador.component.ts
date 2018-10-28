import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  minBlock: boolean = false;
  maxBlock: boolean = false;
  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

    console.log('Constprogreso', this.progreso);

  }

  ngOnInit() {

  }
  
  onChanges(newValue:number){

    
    if(newValue >= 100){
      this.progreso = 100
    }else if(newValue <= 0){
      this.progreso=0
    }else{
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    
    this.cambioValor.emit(this.progreso);




  }
  cambiarValor(val: number) {
    this.progreso += val;

    if (this.progreso === 0) {
      this.minBlock = true
    }
    if (val === 5) {
      this.minBlock = false
    }
    if (this.progreso === 100) {
      this.maxBlock = true
    }
    if (val === -5) {
      this.maxBlock = false
    }
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();



  }

}
