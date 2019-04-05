import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreteCSPFsPage } from './admin-crete-csp-fs.page';

describe('AdminCreteCSPFsPage', () => {
  let component: AdminCreteCSPFsPage;
  let fixture: ComponentFixture<AdminCreteCSPFsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreteCSPFsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreteCSPFsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
