import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTheaterComponent } from './index-theater.component';

describe('IndexTheaterComponent', () => {
  let component: IndexTheaterComponent;
  let fixture: ComponentFixture<IndexTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
