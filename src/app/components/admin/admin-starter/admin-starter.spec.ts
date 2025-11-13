import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStarter } from './admin-starter';

describe('AdminStarter', () => {
  let component: AdminStarter;
  let fixture: ComponentFixture<AdminStarter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStarter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStarter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
