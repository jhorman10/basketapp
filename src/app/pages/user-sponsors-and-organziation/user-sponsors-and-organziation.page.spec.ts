import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSponsorsAndOrganziationPage } from './user-sponsors-and-organziation.page';

describe('UserSponsorsAndOrganziationPage', () => {
  let component: UserSponsorsAndOrganziationPage;
  let fixture: ComponentFixture<UserSponsorsAndOrganziationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSponsorsAndOrganziationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSponsorsAndOrganziationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
