import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInputCSPPage } from './admin-input-csp.page';

describe('AdminInputCSPPage', () => {
  let component: AdminInputCSPPage;
  let fixture: ComponentFixture<AdminInputCSPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInputCSPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInputCSPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
