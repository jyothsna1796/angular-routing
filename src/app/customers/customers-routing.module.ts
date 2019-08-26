import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostomerListComponent } from './costomer-list/costomer-list.component';

const routes: Routes = [
  { path : '' , component : CostomerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
