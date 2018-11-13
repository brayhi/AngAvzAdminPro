import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subscription:Subscription;

  constructor() {



    this.subscription = this.sendObs()
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => console.log('termino')
      )



  }

  ngOnInit() {
  }

  sendObs(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        }
        observer.next(salida);

        // if (contador === 2) {
        //   observer.error('c mamo');
        // }

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }


      }, 500);

    }

    )
      .pipe(retry())
      .pipe(map(res => {
        return res.valor
      }))
      .pipe(filter((valor, index) => {
        if( valor % 2  === 1){
          //impar
          return true
        }else{
          return false
        }
        
      }))

  }

  ngOnDestroy(){

    this.subscription.unsubscribe()

  }

}
