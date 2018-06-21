import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './app.constants';

@Injectable()
export class AppService {

    baseURL: string;
    options: any;

    constructor(private httpClient: HttpClient, private configuration: Configuration) {
        this.baseURL = configuration.baseURL;
    }

    // GET
    getIssues(): Observable<any> {
        return this.httpClient
            .get(this.baseURL + '/repos/angular/angular/issues', this.options);
    }

}
