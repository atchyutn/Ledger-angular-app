import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  availableBalance: number = 1000;
  captureData$: Observable<any> | undefined;
  private captureDataSubject = new Subject<any>();


  constructor() {
     this.captureData$ = this.captureDataSubject.asObservable();
  }

  captureData(data: any) {
    console.log(data);
    this.captureDataSubject.next(data);
  }

  creditAmout() {
    // this.availableBalance = this.availableBalance + this;
  }

   debitAmout(amount: any, reason: any) {
    // this.availableBalance = this.availableBalance - amount;
  }
}
