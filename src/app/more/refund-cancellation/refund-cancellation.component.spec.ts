import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundCancellationComponent } from './refund-cancellation.component';

describe('RefundCancellationComponent', () => {
  let component: RefundCancellationComponent;
  let fixture: ComponentFixture<RefundCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundCancellationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
