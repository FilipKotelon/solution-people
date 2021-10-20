import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieInfoComponent } from './cookie-info.component';

describe('CookieInfoComponent', () => {
  let component: CookieInfoComponent;
  let fixture: ComponentFixture<CookieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
