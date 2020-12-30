import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
        .append('App-Authorization', 'Bearer ')
        .append('Authorization', 'Bearer ' +
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IkNFNEU1MTA3ODk1NTRGMTEwMDNEMDBGM0MyMTMzMkQ2IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2MDkyOTQ4ODUsImV4cCI6MTYwOTI5NTE4NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAxMCIsImF1ZCI6Imdsb2JvdGlja2V0aW1wbGljaXQiLCJub25jZSI6IjQ4MjZhMTk2ZGRmNDQ0ODVhN2MzMmIzYjg4NmY1YWMwIiwiaWF0IjoxNjA5Mjk0ODg1LCJzX2hhc2giOiJmUkc4clY2Sjh2MllKbWItTkpOQmRRIiwic2lkIjoiRkNFM0M5RUIxNEMxMDAzNjU4NkZGN0MzMTVCRDU3RjYiLCJzdWIiOiJFNDU1QTNERi03RkE1LTQ3RTAtODQzNS0xNzlCMzAwRDUzMUYiLCJhdXRoX3RpbWUiOjE2MDkyOTQ4MTAsImlkcCI6ImxvY2FsIiwibmFtZSI6IkFsaWNlIFNtaXRoIiwiZ2l2ZW5fbmFtZSI6IkFsaWNlIiwiZmFtaWx5X25hbWUiOiJTbWl0aCIsIndlYnNpdGUiOiJodHRwOi8vYWxpY2UuY29tIiwiYW1yIjpbInB3ZCJdfQ.h3JtnFK6WCX5MYWioGtyO61x1Jzq-NXWpehYjZ1o4QSf6FDeSGvFRDcdOjo5bC5z0Cl1INkFd7p6bwqyMf3YHncm5YxQdQEOeYnahn8fM4KKeJ4Dtx0M__BYvZnXKDai7k8c7IopG96zWSPtsRQfbreKaucFEIfPBG_WiBxlAHbYT5VpuZPVwO41FUMURusCfo0_AxTQq_uyk7Or1duZValJvPpSoH0R3SgkMBWWGyZdXI4SIIYvwJt_AeTsIl1sVJjPRpvHJVK8DaLsv5LxrXK4obm2_Oa6SrUhKyjOaTlMV6B_94f64I3joEeSJt1_c4G3T1yPKlSCYqvhCLkIBw')
        .append('Access-Control-Allow-Origin', '*')
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    return next.handle(request);
  }
}
