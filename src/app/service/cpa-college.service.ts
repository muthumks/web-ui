import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpaCollegeService {
  //create object of subject
  private cpaCollegeList: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(public http:HttpClient) { }
  setCpaCollegeList(cpaCollegeList){
    this.cpaCollegeList.next(this.cpaCollegeList);
  }
  getCpaCollegeList(){
    return this.cpaCollegeList.asObservable();
  }
  getCpaCollege(){
  return this.http.get('assets/resource/cpaCollege.json')
}

}
