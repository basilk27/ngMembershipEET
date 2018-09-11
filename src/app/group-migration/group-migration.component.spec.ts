import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMigrationComponent } from './group-migration.component';

describe('GroupMigrationComponent', () => {
  let component: GroupMigrationComponent;
  let fixture: ComponentFixture<GroupMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
