import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'cpa-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss']
})
export class UtilsComponent implements OnInit {
  subjectList = [];
  replaySubjectList = [];
  behaviorSubjectList = [];

  constructor() { }

  ngOnInit() {
  }
  /***
   * using subject
   */
  subject() {
    //create an object of subject
    const mySubject: Subject<any> = new Subject<any>();
    // my 1 object
    mySubject.next(1); // my 1 object 
    // my first subscription
    const subObj_1 = mySubject.subscribe(x => {
      this.subjectList.push('my 1 sub method ::' + x);
    });


    mySubject.next(2); // my 2 object
    mySubject.next(3); // my 3 object
    mySubject.next(4); // my 4 object

    // my second subscription
    const subObj_2 = mySubject.subscribe(x => {
      this.subjectList.push('my 2 sub method ::' + x);
    });

    // killing the first subscription
    subObj_1.unsubscribe();

    mySubject.next(5); // my 5 object
    mySubject.next(6); // my 6 object
  }


  /**
   * Using Behavior Subject
   */
  behaviorSubject() {
    //create an object of subject
    const behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(false);
    behaviorSubject.next(1); // my 1 object
    // my first subscription
    const subObj_1 = behaviorSubject.subscribe(x => {
      this.subjectList.push('my 1 sub method ::' + x);
    });

    
    behaviorSubject.next(2); // my 2 object
    behaviorSubject.next(3); // my 3 object
    behaviorSubject.next(4); // my 4 object

    // my second subscription
    const subObj_2 = behaviorSubject.subscribe(x => {
      this.subjectList.push('my 2 sub method ::' + x);
    });

    // killing the first subscription
    subObj_1.unsubscribe();

    behaviorSubject.next(5); // my 5 object
    behaviorSubject.next(6); // my 6 object

  }

  /**
   * Using Replay Subject
   */
  replaySubject() {
    //create an object of subject
    const replaySubject: ReplaySubject<any> = new ReplaySubject<any>(2);
    replaySubject.next(1); // my 1 object
    // my first subscription
    const subObj_1 = replaySubject.subscribe(x => {
      this.subjectList.push('my 1 sub method ::' + x);
    });

    
    replaySubject.next(2); // my 2 object
    replaySubject.next(3); // my 3 object
    replaySubject.next(4); // my 4 object

    // my second subscription
    const subObj_2 = replaySubject.subscribe(x => {
      this.subjectList.push('my 2 sub method ::' + x);
    });

    // killing the first subscription
    subObj_1.unsubscribe();

    replaySubject.next(5); // my 5 object
    replaySubject.next(6); // my 6 object

  }


}
