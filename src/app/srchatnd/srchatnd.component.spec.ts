import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrchatndComponent } from './srchatnd.component';

describe('SrchatndComponent', () => {
  let component: SrchatndComponent;
  let fixture: ComponentFixture<SrchatndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrchatndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrchatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
