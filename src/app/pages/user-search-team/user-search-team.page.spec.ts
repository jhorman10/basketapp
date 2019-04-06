import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchTeamPage } from './user-search-team.page';

describe('UserSearchTeamPage', () => {
  let component: UserSearchTeamPage;
  let fixture: ComponentFixture<UserSearchTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
