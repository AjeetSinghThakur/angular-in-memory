import { createAction, props, Action } from '@ngrx/store';
import { Product } from '@app/models/product';

// UI specific actions
export const toggleProductCode = createAction('[Product] Toggle Product Code', props<{ payload: boolean}>());
export const setCurrentProduct = createAction('[Product] Set Current Product', props<{ payload: Product }>());
export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');
export const clearCurrentProduct = createAction('[Product] Clear Current Product');


// Effects related actions
export const createProduct = createAction('[Product] Create Product', props<{ payload: Product }>());
export const createProductSuccess = createAction('[Product] Create Product Success', props<{ payload: Product }>());
export const createProductFail = createAction('[Product] Create Product Fail', props<{ payload: string }>());

export const loadAllProducts = createAction('[Product] Load');
export const loadSuccess = createAction('[Product] Load Success', props<{ payload: Product[] }>());
export const loadFail = createAction('[Product] Load Fail', props<{ payload: string }>());

export const updateProduct = createAction('[Product] Update Product', props<{ payload: Product }>());
export const updateProductSuccess = createAction('[Product] Update Product Success', props<{ payload: Product }>());
export const updateProductFail = createAction('[Product] Update Product Fail', props<{ payload: string }>());

export const deleteProduct = createAction('[Product] Delete Product', props<{ payload: number }>());
export const deleteProductSuccess = createAction('[Product] Delete Product Success', props<{ payload: number }>());
export const deleteProductFail = createAction('[Product] Delete Product Fail', props<{ payload: string }>());
