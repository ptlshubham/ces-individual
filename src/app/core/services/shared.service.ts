
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { WebFooter } from '../model/web-footer.model';
import { WebImageUpload } from '../model/web-image-upload';
import { WebNavbar } from '../model/web-navbar.model';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private httpClient: HttpClient
    ) {
    }
    getWebNavbar(admin: WebNavbar): Observable<any> {
        return this.httpClient.post<any>(ApiService.getWebNavbarDetailsURL, admin);
    }
    getWebFooter(admin: WebFooter): Observable<any> {
        return this.httpClient.post<any>(ApiService.getWebFooterDetailsURL, admin);
    }
}
