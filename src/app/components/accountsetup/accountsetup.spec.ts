import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountsetup } from './accountsetup';

describe('Accountsetup', () => {
  let component: Accountsetup;
  let fixture: ComponentFixture<Accountsetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountsetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accountsetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
