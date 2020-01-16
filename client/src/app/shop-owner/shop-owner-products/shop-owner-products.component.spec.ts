import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOwnerProductsComponent } from './shop-owner-products.component';

describe('ShopOwnerProductsComponent', () => {
  let component: ShopOwnerProductsComponent;
  let fixture: ComponentFixture<ShopOwnerProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOwnerProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOwnerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
