import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDilyPage } from './modal-dily.page';

describe('ModalDilyPage', () => {
  let component: ModalDilyPage;
  let fixture: ComponentFixture<ModalDilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDilyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
