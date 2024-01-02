import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveComponent } from './reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
