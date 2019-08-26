import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { ProxyexeComponent } from './proxyexe/proxyexe.component';

const routes: Routes = [
   { path : '' , redirectTo : '/employee' , pathMatch : 'full'},
   { path : 'employee' , component : EmployeeComponent},
   { path : 'employee/:id' , component : EmpdetailComponent},
   { path : 'student' , component : StudentComponent},
   { path : '**' , component : PagenotfoundComponent},
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./payments/payments.module').then(mod => mod.PaymentsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
