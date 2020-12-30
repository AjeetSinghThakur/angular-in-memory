import { Routes } from '@angular/router';
import { PageNotFoundComponent, SigninOidcComponent } from './shared/components';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/start' },
  { path: 'start', loadChildren: () => import('@app/start/start.module').then(m => m.StartModule)},
  { path: 'products', loadChildren: () => import('@app/products/product.module').then(m => m.ProductModule)},
  { path: 'events', loadChildren: () => import('@app/globoticket-events/event.module').then(m => m.EventModule)},
  { path: 'signin-oidc', component: SigninOidcComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
