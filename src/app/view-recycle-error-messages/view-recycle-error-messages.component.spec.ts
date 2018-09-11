import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecycleErrorMessagesComponent } from './view-recycle-error-messages.component';

describe('ViewRecycleErrorMessagesComponent', () => {
  let component: ViewRecycleErrorMessagesComponent;
  let fixture: ComponentFixture<ViewRecycleErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecycleErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecycleErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
