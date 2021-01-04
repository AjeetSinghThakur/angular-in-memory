import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenIdConnectService } from '@app/shared/services/open-id-connect.service';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private openIdConnectService: OpenIdConnectService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):
         Observable<HttpEvent<any>> {
        // add the access token as bearer token
        request = request.clone(
            { setHeaders: { Authorization: this.openIdConnectService.user.token_type
                + ' ' + this.openIdConnectService.user.access_token } });
        return next.handle(request);
    }
}
