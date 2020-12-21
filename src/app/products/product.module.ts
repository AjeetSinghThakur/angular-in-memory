import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { featureStateName, productReducers } from './store';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './container';
import { ProductListComponent, ProductEditComponent } from './presentational';

const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureStateName, productReducers),
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [
    ContentComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
