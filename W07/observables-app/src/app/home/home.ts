import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Subscription, Observable, map} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // const secondsCounter = interval(1000);
    // this.firstObservableSubscription = secondsCounter.subscribe(count =>
    //   console.log(`Seconds elapsed: ${count}`)
    // );

    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.subscribe(
      count => {console.log(`Custom interval count: ${count}`)},
      error => {
        console.error(error);
        alert(error.message);
      },
      () => console.log('Custom interval completed!')
    );

    customIntervalObservable.pipe(map( data => {
      return "Round: " + (data as number + 1);
    }))
  }

  ngOnDestroy() {
    this.firstObservableSubscription.unsubscribe();
  }
}
