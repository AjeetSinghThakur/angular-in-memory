import { Routes } from '@angular/router';
import { PageNotFoundComponent, RedirectSilentRenewComponent, SigninOidcComponent } from './shared/components';
import { RequireAuthenticatedUserRouteGuardService } from './shared/services/required-authentication-user-route-gaurd.service';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/start' },
  { path: 'start', loadChildren: () => import('@app/start/start.module').then(m => m.StartModule)},
  { path: 'products', loadChildren: () => import('@app/products/product.module').then(m => m.ProductModule)},
  { path: 'events', canActivate: [RequireAuthenticatedUserRouteGuardService], loadChildren: () => import('@app/globoticket-events/event.module').then(m => m.EventModule)},
  { path: 'signin-oidc', component: SigninOidcComponent },
  { path: 'redirect-silentrenew', component: RedirectSilentRenewComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
