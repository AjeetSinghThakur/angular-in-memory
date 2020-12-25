import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { ReducerProductState, productReducer } from './globoticket.reducer';
import * as fromRoot from '@app/store';

export const featureStateName = 'productsFeature';

export interface ProductState extends fromRoot.State {
  product: ReducerProductState;
}

export const productReducers: ActionReducerMap<ProductState> = {
  product: productReducer
};

export const getProductFeatureState = createFeatureSelector<ProductState>(
  featureStateName
);

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.product.showProductCode
);
export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.product.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
      if (currentProductId === 0) {
          return {
              id: 0,
              productName: '',
              productCode: 'New',
              description: '',
              starRating: 0
          };
      } else {
          return currentProductId ? state.product.products.find(p => p.id === currentProductId) : null;
      }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.product.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.product.error
);
