import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreteFixtureStep2Page } from './admin-crete-fixture-step2.page';

describe('AdminCreteFixtureStep2Page', () => {
  let component: AdminCreteFixtureStep2Page;
  let fixture: ComponentFixture<AdminCreteFixtureStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreteFixtureStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreteFixtureStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
