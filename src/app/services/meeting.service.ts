import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private apiUrl = 'http://localhost:5278/api/Meeting'; 

  constructor(private http: HttpClient) { }

  // Tüm toplantıları getir
  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.apiUrl);
  }
}
