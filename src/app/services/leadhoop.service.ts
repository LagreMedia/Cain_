// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LeadHoopService {
    constructor(
        // private http: HttpClient
    ) {}

    postLead(
        query: any
      ) {
        console.log('http://back2learn-post.leadhoop.com/incoming/leads?' + Object.keys(query).map(key => {
                return `${key}=${encodeURIComponent(query[key])}`;
            }).join('&')
        );
        // return this.http
        //     .post(
        //         'http://back2learn-post.leadhoop.com/incoming/leads?' + new URLSearchParams(query).toString(),
        //         { },
        //         { responseType: 'json' }
        //     );
    }
}
