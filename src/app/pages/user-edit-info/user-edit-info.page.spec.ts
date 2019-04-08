import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditInfoPage } from './user-edit-info.page';

describe('UserEditInfoPage', () => {
  let component: UserEditInfoPage;
  let fixture: ComponentFixture<UserEditInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
