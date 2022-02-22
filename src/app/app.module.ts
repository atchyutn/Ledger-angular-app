import { TransactionsService } from './Shared/services/transactions.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionNavComponent } from './transaction-nav/transaction-nav.component';

@NgModule({
  declarations: [
    AppComponent,
      TransactionNavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
