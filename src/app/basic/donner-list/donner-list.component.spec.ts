import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerListComponent } from './donner-list.component';

describe('DonnerListComponent', () => {
  let component: DonnerListComponent;
  let fixture: ComponentFixture<DonnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
