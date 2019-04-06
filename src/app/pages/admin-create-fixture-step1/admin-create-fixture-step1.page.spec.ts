import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreteFixtureStep1Page } from './admin-create-fixture-step1.page';

describe('AdminCreteFixtureStep1Page', () => {
  let component: AdminCreteFixtureStep1Page;
  let fixture: ComponentFixture<AdminCreteFixtureStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreteFixtureStep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreteFixtureStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
