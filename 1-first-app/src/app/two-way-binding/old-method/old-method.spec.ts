import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMethod } from './old-method';

describe('OldMethod', () => {
  let component: OldMethod;
  let fixture: ComponentFixture<OldMethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldMethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldMethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
