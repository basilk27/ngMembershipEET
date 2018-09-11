import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleMessagesComponent } from './recycle-messages.component';

describe('RecycleMessagesComponent', () => {
  let component: RecycleMessagesComponent;
  let fixture: ComponentFixture<RecycleMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
