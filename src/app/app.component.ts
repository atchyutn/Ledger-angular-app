import { TransactionsService } from './Shared/services/transactions.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trasactions-interview-repo';
  balance: any = 1000;
  transactionArray: any = [];
  public data: Array<any> = this.transactionArray;

  constructor(private transactionService: TransactionsService) {
    this.balance = this.transactionService.availableBalance;
  }

  ngOnChnages() {
    this.balance = this.transactionService.availableBalance;
  }


  credit(amount: any, reason: any) {
    this.transactionService.availableBalance = this.transactionService.availableBalance + parseInt(amount);
    this.balance = this.transactionService.availableBalance;
    this.transactionArray = this.transactionArray.push({ amount: amount, reason: reason, type: 'credit' });
    this.transactionService.captureData(this.data);
  }

  debit(amount: any, reason: any) {
    this.transactionService.availableBalance = this.transactionService.availableBalance - parseInt(amount);
    this.balance = this.transactionService.availableBalance;
    this.transactionArray = this.transactionArray.push({ amount: amount, reason: reason, type: 'debit' });
    this.transactionService.captureData(this.data);
  }
}
