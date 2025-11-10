import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verified } from './verified';

describe('Verified', () => {
  let component: Verified;
  let fixture: ComponentFixture<Verified>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verified]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verified);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
