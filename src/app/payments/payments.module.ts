import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PayModule } from './pay/pay.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    PayModule
  ]
})
export class PaymentsModule { }
