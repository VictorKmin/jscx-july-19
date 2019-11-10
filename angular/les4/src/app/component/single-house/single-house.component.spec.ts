import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHouseComponent } from './single-house.component';

describe('SingleHouseComponent', () => {
  let component: SingleHouseComponent;
  let fixture: ComponentFixture<SingleHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
