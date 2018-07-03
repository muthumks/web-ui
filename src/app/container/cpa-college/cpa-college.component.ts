import { Component, OnInit } from '@angular/core';
import { CpaCollegeService } from '../../service/cpa-college.service';

import { CpaCollege } from './cpaCollege';


@Component({
  selector: 'cpa-cpa-college',
  templateUrl: './cpa-college.component.html',
  styleUrls: ['./cpa-college.component.scss']
})
export class CpaCollegeComponent implements OnInit {
cpaCollegeList:Array<CpaCollege> = new Array<CpaCollege>();

  constructor(public cpaCollegeService:CpaCollegeService) { }

  ngOnInit() {
  this.getCpaCollegeList();
  }
addCourse(){

}
getCpaCollegeList(){
  this.cpaCollegeService.getCpaCollegeList().subscribe((cpaCollegeResponse:Array<CpaCollege>)=>{
    this.cpaCollegeList = cpaCollegeResponse ? cpaCollegeResponse["cpaCollege"]: [];
  });
}
}
