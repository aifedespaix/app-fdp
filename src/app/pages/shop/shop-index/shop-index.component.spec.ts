import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShopIndexComponent} from './shop-index.component';
import {TestsModule} from '../../../tests/tests.module';
import {ShopModule} from '../shop.module';

describe('ShopComponent', () => {
  let component: ShopIndexComponent;
  let fixture: ComponentFixture<ShopIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopModule, TestsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
