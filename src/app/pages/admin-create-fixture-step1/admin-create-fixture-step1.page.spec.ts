import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateFixtureStep1Page } from './admin-create-fixture-step1.page';

describe('AdmincreateFixtureStep1Page', () => {
  let component: AdmincreateFixtureStep1Page;
  let fixture: ComponentFixture<AdmincreateFixtureStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreateFixtureStep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateFixtureStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
