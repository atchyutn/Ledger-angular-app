import { TransactionsService } from './../Shared/services/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-nav',
  templateUrl: './transaction-nav.component.html',
  styleUrls: ['./transaction-nav.component.css']
})
export class TransactionNavComponent implements OnInit {

  transactionArray: any = [];
  public data: Array<any> = this.transactionArray;
  transactions: any;
  constructor(private transactionService: TransactionsService) {
    this.transactionService.transactionData$.subscribe((data) => {
      this.data = data;
      this.transactionArray = this.data;
    });
  }
  ngOnInit(){
  }

  showAll() {
    this.transactionArray = this.data;
  }
  showCredits() {
    this.transactionArray = this.data.filter(transaction => transaction.type === 'credit');
    console.log(this.transactionArray);
  }

  showDebits() {
    console.log("showing debits");
    this.transactionArray = this.data.filter(transaction => transaction.type === 'debit');
  }
}
