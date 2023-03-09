import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroDonnerListComponent } from './micro-donner-list.component';

describe('MicroDonnerListComponent', () => {
  let component: MicroDonnerListComponent;
  let fixture: ComponentFixture<MicroDonnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroDonnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroDonnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
