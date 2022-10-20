import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = 'http://localhost:3333';
  private endpoint = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) { }

  getMoments(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  createMoment(formData: FormData): Observable<any> {
    return this.http.post(this.endpoint, formData);
  }

}

  

