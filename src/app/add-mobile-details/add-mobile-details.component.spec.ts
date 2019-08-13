import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileDetailsComponent } from './add-mobile-details.component';

describe('AddMobileDetailsComponent', () => {
  let component: AddMobileDetailsComponent;
  let fixture: ComponentFixture<AddMobileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
