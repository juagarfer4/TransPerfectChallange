import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

    headers: HttpHeaders;
    options: any;
    baseURL = 'https://api.github.com';

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    // GET
    getIssues(): Observable<any> {
        return this.httpClient
            .get(this.baseURL + '/repos/angular/angular/issues', this.options);
    }

}
