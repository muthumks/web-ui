import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CpaCollegeService {

  constructor(public http:HttpClient) { }

  getCpaCollegeList(){
  return this.http.get('assets/resource/cpaCollege.json')
}

}
