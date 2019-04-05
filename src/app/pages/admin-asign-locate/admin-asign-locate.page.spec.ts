import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsignLocatePage } from './admin-asign-locate.page';

describe('AdminAsignLocatePage', () => {
  let component: AdminAsignLocatePage;
  let fixture: ComponentFixture<AdminAsignLocatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAsignLocatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAsignLocatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
