import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaDocDispatchComponent } from './ca-doc-dispatch.component';

describe('CaDocDispatchComponent', () => {
  let component: CaDocDispatchComponent;
  let fixture: ComponentFixture<CaDocDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaDocDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaDocDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
