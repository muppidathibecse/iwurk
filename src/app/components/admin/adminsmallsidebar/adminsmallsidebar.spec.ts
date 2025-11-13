import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminsmallsidebar } from './adminsmallsidebar';

describe('Adminsmallsidebar', () => {
  let component: Adminsmallsidebar;
  let fixture: ComponentFixture<Adminsmallsidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminsmallsidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminsmallsidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
