import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeatherComponent } from './edit-teather.component';

describe('EditTeatherComponent', () => {
  let component: EditTeatherComponent;
  let fixture: ComponentFixture<EditTeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
