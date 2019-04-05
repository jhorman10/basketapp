import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateUsersPage } from './admin-create-users.page';

describe('AdminCreateUsersPage', () => {
  let component: AdminCreateUsersPage;
  let fixture: ComponentFixture<AdminCreateUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
