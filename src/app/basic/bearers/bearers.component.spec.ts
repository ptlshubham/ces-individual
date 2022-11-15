import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearersComponent } from './bearers.component';

describe('BearersComponent', () => {
  let component: BearersComponent;
  let fixture: ComponentFixture<BearersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
