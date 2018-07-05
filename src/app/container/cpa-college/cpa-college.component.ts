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
heroInput:any = "";
  constructor(public cpaCollegeService:CpaCollegeService) { }

  ngOnInit() {
  this.getCpaCollege();
  }
addCourse(){
let cpaCollege = new CpaCollege();
cpaCollege.id = 10;
this.cpaCollegeList.push(cpaCollege);
this.cpaCollegeService.getCpaCollegeList().subscribe((cpaCollegeResponse:Array<CpaCollege>)=>{
  console.log(cpaCollegeResponse);
}

)
}
getCpaCollege(){
  this.cpaCollegeService.getCpaCollege().subscribe(
    //success
    (cpaCollegeResponse:Array<CpaCollege>)=>{
    this.cpaCollegeList = cpaCollegeResponse ? cpaCollegeResponse["cpaCollege"]: [];
    this.cpaCollegeService.setCpaCollegeList(this.cpaCollegeList);
  },
  //error
  (error) =>{
    console.log(error)
  },
  //final
  () =>{
    console.log('Finally')
  }
);
}
}
