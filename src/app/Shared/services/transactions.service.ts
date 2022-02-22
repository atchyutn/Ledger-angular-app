import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  availableBalance: number = 1000;
  transactionData$: Observable<any>;
  private transactionDataSubject = new Subject<any>();


  constructor() {
     this.transactionData$ = this.transactionDataSubject.asObservable();
  }

  transactionData(data: any) {
    console.log(data);
    this.transactionDataSubject.next(data);
  }
}
