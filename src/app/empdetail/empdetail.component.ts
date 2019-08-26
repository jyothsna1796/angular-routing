import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
public empId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.empId = id;
    this.route.paramMap.subscribe((params : ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.empId = id;
    });
  }
  goPrevious(){
    let preId = this.empId - 1;
    this.router.navigate(['/employee' ,  preId]);
  }
  goNext(){
    let NextId = this.empId + 1;
    this.router.navigate(['/employee' ,  NextId]);
  }


}
