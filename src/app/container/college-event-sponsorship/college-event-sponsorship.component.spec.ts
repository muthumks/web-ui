import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeEventSponsorshipComponent } from './college-event-sponsorship.component';

describe('CollegeEventSponsorshipComponent', () => {
  let component: CollegeEventSponsorshipComponent;
  let fixture: ComponentFixture<CollegeEventSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeEventSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeEventSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
