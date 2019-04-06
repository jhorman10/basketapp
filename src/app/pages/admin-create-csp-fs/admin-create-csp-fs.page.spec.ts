import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateCSPFsPage } from './admin-create-csp-fs.page';

describe('AdmincreateCSPFsPage', () => {
  let component: AdmincreateCSPFsPage;
  let fixture: ComponentFixture<AdmincreateCSPFsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreateCSPFsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateCSPFsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
