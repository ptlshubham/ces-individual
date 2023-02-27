import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryStudentsComponent } from './beneficiary-students.component';

describe('BeneficiaryStudentsComponent', () => {
  let component: BeneficiaryStudentsComponent;
  let fixture: ComponentFixture<BeneficiaryStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
