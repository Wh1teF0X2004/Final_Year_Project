import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultationComponent } from './update-consultation.component';

describe('UpdateConsultationComponent', () => {
  let component: UpdateConsultationComponent;
  let fixture: ComponentFixture<UpdateConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateConsultationComponent]
    });
    fixture = TestBed.createComponent(UpdateConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
