import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Response';
import { Moment } from '../Moments';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = 'http://localhost:3333';
  private endpoint = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.endpoint);
  }
   
  getMoment(id: number): Observable<Response<Moment>>{
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<any> {
    return this.http.post(this.endpoint, formData);
  }

  deleteMoment(id: number): Observable<Response<Moment>>{
    const url = `${this.endpoint}/${id}`;
    return this.http.delete<Response<Moment>>(url);
  }

}

  

