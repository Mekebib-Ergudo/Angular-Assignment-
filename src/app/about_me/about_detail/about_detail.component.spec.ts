/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { About_detailComponent } from './about_detail.component';

describe('About_detailComponent', () => {
  let component: About_detailComponent;
  let fixture: ComponentFixture<About_detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About_detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About_detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
