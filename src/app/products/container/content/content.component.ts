import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

// Ngrx
import * as fromProductStore from '@app/products/store';
import * as fromRoot from '@app/store';
import { getProducts, getShowProductCode, getCurrentProduct, getError } from '@app/products/store';
import { Product } from '@app/models';

@Component({
  selector: 'qa-product-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(fromProductStore.loadAllProducts());
    this.products$ = this.store.pipe(select(getProducts));
    this.errorMessage$ = this.store.pipe(select(getError));
    this.selectedProduct$ = this.store.pipe(select(getCurrentProduct));
    this.displayCode$ = this.store.pipe(select(getShowProductCode));
  }
  checkChanged(value: boolean): void {
    this.store.dispatch(fromProductStore.toggleProductCode({payload: value}));
  }
  productSelected(product: Product): void {
    this.store.dispatch(fromProductStore.setCurrentProduct({payload: product}));
  }
  newProduct(): void {
    this.store.dispatch(fromProductStore.initializeCurrentProduct());
  }
  deleteProduct(product: Product): void {
    this.store.dispatch(fromProductStore.deleteProduct({ payload: product.id }));
  }
  clearProduct(): void {
    this.store.dispatch(fromProductStore.clearCurrentProduct());
  }
  saveProduct(product: Product): void {
    this.store.dispatch(fromProductStore.createProduct({ payload: product }));
  }
  updateProduct(product: Product): void {
    this.store.dispatch(fromProductStore.updateProduct({ payload: product }));
  }
}
