import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 employees = [
   {id : 1 , name : "Jyothsna"},
   { id: 2 , name : "Lakshmi"},
   { id: 3 , name : "Bujji"},
   { id: 4 , name : "prasanna"},
   { id: 5 , name : "sowji"}
 ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(emp){
 this.router.navigate(['/employee', emp.id]);
  }

}
