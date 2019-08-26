import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    PayRoutingModule
  ]
})
export class PayModule { }
