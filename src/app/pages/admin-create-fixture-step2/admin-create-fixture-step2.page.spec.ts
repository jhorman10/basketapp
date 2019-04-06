import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateFixtureStep2Page } from './admin-create-fixture-step2.page';

describe('AdmincreateFixtureStep2Page', () => {
  let component: AdmincreateFixtureStep2Page;
  let fixture: ComponentFixture<AdmincreateFixtureStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreateFixtureStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateFixtureStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
