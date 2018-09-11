import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachStatusComponent } from './seach-status.component';

describe('SeachStatusComponent', () => {
  let component: SeachStatusComponent;
  let fixture: ComponentFixture<SeachStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
