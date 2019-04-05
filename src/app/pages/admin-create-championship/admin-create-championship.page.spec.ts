import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateChampionshipPage } from './admin-create-championship.page';

describe('AdminCreateChampionshipPage', () => {
  let component: AdminCreateChampionshipPage;
  let fixture: ComponentFixture<AdminCreateChampionshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateChampionshipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateChampionshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
