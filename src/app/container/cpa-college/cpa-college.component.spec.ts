import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaCollegeComponent } from './cpa-college.component';

describe('CpaCollegeComponent', () => {
  let component: CpaCollegeComponent;
  let fixture: ComponentFixture<CpaCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
