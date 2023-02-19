import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeadHoopService {
    constructor(
        private http: HttpClient
    ) {}

    async postLead(
        query: any
      ) {
        const route = 'http://back2learn-post.leadhoop.com/incoming/leads?' + Object.keys(query).map(key => {
                return `${key}=${encodeURIComponent(query[key])}`;
            }).join('&');
        console.log(route);
        try {
            const res = await lastValueFrom(this.http.post(
                    route,
                    { },
                    { responseType: 'json' }
                ));
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    async getIpAddress() {
        try {
            const res = await lastValueFrom(this.http.get<any>('https://geolocation-db.com/json/'));
            return res.IPv4;
        } catch (err) {
            console.log(err);
            return '';
        }
    }
}
