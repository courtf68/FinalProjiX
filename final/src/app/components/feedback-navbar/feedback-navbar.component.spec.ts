import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNavbarComponent } from './feedback-navbar.component';

describe('FeedbackNavbarComponent', () => {
  let component: FeedbackNavbarComponent;
  let fixture: ComponentFixture<FeedbackNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
