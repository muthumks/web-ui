import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaProfessorComponent } from './cpa-professor.component';

describe('CpaProfessorComponent', () => {
  let component: CpaProfessorComponent;
  let fixture: ComponentFixture<CpaProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
