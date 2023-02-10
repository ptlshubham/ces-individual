import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingStructureComponent } from './pricing-structure.component';

describe('PricingStructureComponent', () => {
  let component: PricingStructureComponent;
  let fixture: ComponentFixture<PricingStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
