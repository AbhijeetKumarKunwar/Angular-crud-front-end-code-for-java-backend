import { ComponentFixture, TestBed } from '@angular/core/testing';

import { In28minutesComponent } from './in28minutes.component';

describe('In28minutesComponent', () => {
  let component: In28minutesComponent;
  let fixture: ComponentFixture<In28minutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ In28minutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(In28minutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
