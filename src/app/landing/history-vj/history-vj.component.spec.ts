import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryVjComponent } from './history-vj.component';

describe('HistoryVjComponent', () => {
  let component: HistoryVjComponent;
  let fixture: ComponentFixture<HistoryVjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryVjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryVjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
