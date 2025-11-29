import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMethod } from './new-method';

describe('NewMethod', () => {
  let component: NewMethod;
  let fixture: ComponentFixture<NewMethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
