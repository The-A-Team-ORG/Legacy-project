import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOwnerdashboardComponent } from './shop-ownerdashboard.component';

describe('ShopOwnerdashboardComponent', () => {
  let component: ShopOwnerdashboardComponent;
  let fixture: ComponentFixture<ShopOwnerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOwnerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOwnerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
