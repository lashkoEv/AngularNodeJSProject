import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUsModalWindowComponent } from './call-us-modal-window.component';

describe('CallUsModalWindowComponent', () => {
  let component: CallUsModalWindowComponent;
  let fixture: ComponentFixture<CallUsModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallUsModalWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallUsModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
