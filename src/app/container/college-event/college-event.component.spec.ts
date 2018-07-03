import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeEventComponent } from './college-event.component';

describe('CollegeEventComponent', () => {
  let component: CollegeEventComponent;
  let fixture: ComponentFixture<CollegeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
