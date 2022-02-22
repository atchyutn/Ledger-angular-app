import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../Shared/services/transactions.service';

@Component({
  selector: 'app-available-balance',
  templateUrl: './available-balance.component.html',
  styleUrls: ['./available-balance.component.css']
})
export class AvailableBalanceComponent implements OnInit {

  balance: number = 1000;
  transactionArray: any = [];
  public data: Array<any> = this.transactionArray;
  transactions: any;
  constructor(private transactionService: TransactionsService) {
    this.transactionService.transactionData$.subscribe((data) => {
      this.data = data;
      this.transactionArray = this.data;
      this.balance = this.transactionService.availableBalance;
    });
  }

  ngOnInit(): void {
  }

  ngOnchanges() {
  }

}
