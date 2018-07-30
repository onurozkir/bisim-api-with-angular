import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BicycleService {

    url = 'https://api.citybik.es//v2/networks';
    constructor(private http: HttpClient) { }

    getBicycles() {
        return this
            .http
            .get(`${this.url}/baksi-bisim`);
    }
}
