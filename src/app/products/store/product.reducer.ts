import * as productActions from './product.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '@app/models/product';

export interface ReducerProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
  loading: boolean;
}

export const initialState: ReducerProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
  loading: false
};

const productReducerInternal = createReducer(
  initialState,
  on(
    productActions.loadAllProducts,
    productActions.updateProduct,
    productActions.deleteProduct,
    productActions.createProduct,
    state => ({
      ...state,
      loading: true
    })
  ),
  on(productActions.loadSuccess, (state, { payload }) => ({
    ...state,
    products: payload,
    error: '',
    loading: false
  })),
  on(productActions.loadFail, (state, { payload }) => ({
    ...state,
    products: [],
    error: payload,
    loading: false,
  })),
  on(productActions.toggleProductCode, (state, { payload }) => ({
    ...state,
    showProductCode: payload,
    loading: false
  })),
  on(productActions.setCurrentProduct, (state, { payload }) => ({
    ...state,
    currentProductId: payload.id,
    loading: false
  })),
  on(productActions.initializeCurrentProduct, state => ({
      ...state,
      currentProductId: 0,
      loading: false
  })),
  on(productActions.updateProductSuccess, (state, { payload }) => {
    const updatedProducts = state.products.map(item => payload.id === item.id ? payload : item);
    return {
      ...state,
      products: updatedProducts,
      currentProductId: payload.id,
      error: '',
      loading: false
    };
  }),
  on(productActions.updateProductFail, (state, { payload }) => ({
    ...state,
    products: [],
    error: payload,
    loading: false,
  })),
  on(productActions.createProductSuccess, (state, { payload }) => {
    return {
      ...state,
      products: [...state.products, payload],
      currentProductId: payload.id,
      error: '',
      loading: false
    };
  }),
  on(productActions.createProductFail, (state, { payload }) => ({
    ...state,
    products: [],
    error: payload,
    loading: false,
  })),
  on(productActions.deleteProductSuccess, (state, { payload }) => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== payload),
      currentProductId: null,
      error: '',
      loading: false
    };
  }),
  on(productActions.deleteProductFail, (state, { payload }) => ({
    ...state,
    products: [],
    error: payload,
    loading: false,
  }))
);

export function productReducer(state: ReducerProductState | undefined, action: Action) {
  return productReducerInternal(state, action);
}
