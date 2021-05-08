import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetalsComponent } from './product-detals.component';

describe('ProductDetalsComponent', () => {
  let component: ProductDetalsComponent;
  let fixture: ComponentFixture<ProductDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
