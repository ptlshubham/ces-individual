import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavratriComponent } from './navratri.component';

describe('NavratriComponent', () => {
  let component: NavratriComponent;
  let fixture: ComponentFixture<NavratriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavratriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavratriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
