import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterComponent } from './enter.component';

describe('EnterComponent', () => {
  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
