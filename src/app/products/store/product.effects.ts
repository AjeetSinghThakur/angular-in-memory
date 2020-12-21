import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as productActions from './product.actions';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '@app/models/product';
import { AbstractNotificationService } from '@app/shared/services';
import { ProductService } from '@app/core/services';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService,
              private notificationService: AbstractNotificationService) {}

  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productActions.loadAllProducts),
    mergeMap(action =>
      this.productService.getProducts().pipe(
        map((products: Product[]) => {
          this.notificationService.showInfo('Products', 'Loading Successful.');
          return productActions.loadSuccess({ payload: products });
        }),
        catchError(err => of(productActions.loadFail(err)))
      )
    )
   )
  );
  updateProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(productActions.updateProduct),
    map(action => action.payload),
    mergeMap((product: Product) =>
      this.productService.updateProduct(product).pipe(
        map(newProduct => (productActions.updateProductSuccess({ payload: newProduct }))),
        catchError(err => of(productActions.updateProductFail(err)))
      )
    )
  )
);
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.createProduct),
      map(action => action.payload),
      mergeMap((product: Product) =>
        this.productService.createProduct(product).pipe(
          map(newProduct => (productActions.createProductSuccess({ payload: newProduct }))),
          catchError(err => of(productActions.createProductFail(err)))
        )
      )
    )
  );
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.deleteProduct),
      map(action => action.payload),
      mergeMap((productId: number)  =>
        this.productService.deleteProduct(productId).pipe(
          map(() => (productActions.deleteProductSuccess({payload: productId}))),
          catchError(err => of(productActions.deleteProductFail(err)))
        )
      )
    )
  );

}
