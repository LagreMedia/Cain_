import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from 'url';

@Injectable({
    providedIn: 'root'
})
export class CompetencyService {
    constructor(
        private http: HttpClient
    ) {}

    postLead(
        query: any
      ) {
      return this.http
        .post(
          'http://back2learn-post.leadhoop.com/incoming/leads?' + new URLSearchParams(query).toString(),
          { },
          { responseType: 'json' }
        );
    }
}
