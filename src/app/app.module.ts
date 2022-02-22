import { TransactionsService } from './Shared/services/transactions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionNavComponent } from './transaction-nav/transaction-nav.component';
import { AvailableBalanceComponent } from './available-balance/available-balance.component';

@NgModule({
  declarations: [
    AppComponent,
      TransactionNavComponent,
      AvailableBalanceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
