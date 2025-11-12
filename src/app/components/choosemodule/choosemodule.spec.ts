import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choosemodule } from './choosemodule';

describe('Choosemodule', () => {
  let component: Choosemodule;
  let fixture: ComponentFixture<Choosemodule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choosemodule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choosemodule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
