import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RahotkarshFundComponent } from './rahotkarsh-fund.component';

describe('RahotkarshFundComponent', () => {
  let component: RahotkarshFundComponent;
  let fixture: ComponentFixture<RahotkarshFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RahotkarshFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RahotkarshFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
