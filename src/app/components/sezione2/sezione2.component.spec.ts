import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sezione2Component } from './sezione2.component';

describe('Sezione2Component', () => {
  let component: Sezione2Component;
  let fixture: ComponentFixture<Sezione2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sezione2Component]
    });
    fixture = TestBed.createComponent(Sezione2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
