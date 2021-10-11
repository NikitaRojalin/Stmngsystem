import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtndlistComponent } from './atndlist.component';

describe('AtndlistComponent', () => {
  let component: AtndlistComponent;
  let fixture: ComponentFixture<AtndlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtndlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtndlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
