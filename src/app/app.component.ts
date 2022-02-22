import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trasactions-interview-repo';
  balance = 1000;

  credit(amount: any, reason: any) {

    this.balance += parseInt(amount);
  }

  debit(amount: any, reason: any) {
    this.balance -= parseInt(amount);
  }
}
