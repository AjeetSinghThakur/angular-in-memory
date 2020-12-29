import { Injectable } from '@angular/core';
import { EventData } from '@app/models';
import { HttpWrapperService } from '@app/shared/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpWrapperService) { }

  getEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>(environment.eventApiUrl + 'events');
  }
}
