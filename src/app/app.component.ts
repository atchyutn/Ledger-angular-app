import { TransactionsService } from './Shared/services/transactions.service';
import { Component, Inject } from '@angular/core';
import { AvailableBalanceComponent } from './available-balance/available-balance.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trasactions-interview-repo';
  transactionArray: any = [];
  public data: Array<any> = this.transactionArray;

  constructor(private transactionService: TransactionsService) {
  }

  ngOnChnages() {
  }


  credit(amount: any, reason: any) {
    if (amount != '' && reason != '') {
      this.transactionService.availableBalance = this.transactionService.availableBalance + parseInt(amount);
      this.transactionArray.push({ amount: amount, reason: reason, type: 'credit' });
      this.transactionService.transactionData(this.data);
    } else {
      alert("Please enter amount and reason");
    }
  }

  debit(amount: any, reason: any) {
    if (amount != '' && reason != '') {
      this.transactionService.availableBalance = this.transactionService.availableBalance - parseInt(amount);
      this.transactionArray.push({ amount: amount, reason: reason, type: 'debit' });
      this.transactionService.transactionData(this.data);
    }else if(amount > this.transactionService.availableBalance){
      alert("Insufficient balance");
    }else {
      alert("Please enter amount and reason");
    }
  }
}
