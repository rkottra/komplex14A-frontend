import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  constructor(private http:HttpClient) { }

  getPilotak() {
    return this.http.get("http://localhost:8000/pilotak");
  }
}
