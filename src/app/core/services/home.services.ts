import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(
        private http: HttpClient
    ) { }
    getInstituteDetailsById(data: any) {
        return this.http.get(ApiService.getInstituteDetailByUrlURL + data);
    }
    getLastUpdateSiteByIdURL(id: any) {
        return this.http.get(ApiService.getLastUpdateSiteByIdURL + id);
    }
    saveInstituteData(data: any) {
        return this.http.post(ApiService.saveInsituteDetailsURL, data);
    }
    getAllInstituteData() {
        return this.http.get(ApiService.getAllInstituteDetailsURL);
    }
    saveBannersImagesData(data: any) {
        return this.http.post(ApiService.saveGalleryImagesURL, data);
    }
    uploadBannersImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadGalleryImagesURL, img);
    }
    getBannersImagesById(id: any) {
        let data = {
            institute_id: id
        };
        return this.http.post(ApiService.getImagesByIdDetailsURL, data);
    }
    activeDeavctiveBanners(data: any): Observable<any> {
        return this.http.post<any>(ApiService.updateActiveDeactiveBannersURL, data);
    }
    removeBannersImagesById(id: any) {
        let data = {
            id: id
        };
        return this.http.post(ApiService.removeImagesByIdDetailsURL, data);
    }
    saveDepartmentListData(data: any) {
        return this.http.post(ApiService.saveDepartmentListURL, data);
    }
    getDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.getDepartmentByIdDetailsURL + institute_id);
    }
    removeDepartmentDataById(institute_id: any) {
        return this.http.get(ApiService.removeDepartmentByIdDetailsURL + institute_id);
    }
    updateDepartmentListData(data: any) {
        return this.http.post(ApiService.updateDepartmentListURL, data);
    }
    uploadBlogImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadBlogImagesURL, img);
    }
    saveBlogDetails(data: any) {
        return this.http.post(ApiService.saveBlogDetailsURL, data);
    }
    getBlogsById(id: any) {
        return this.http.get(ApiService.getBlogsDetailsByIdURL + id);
    }
    uploadOInfraImage(img: any): Observable<any> {
        return this.http.post<any>(ApiService.uploadInfraImageURL, img);
    }
    saveInfrastructureDetails(data: any) {

        return this.http.post(ApiService.saveInfrastructureDetailsURL, data);
    }
    getImfraDetails(id: any) {
        return this.http.get(ApiService.getInfraDetailsByIdURL + id);
    }
    saveAlumniDetail(data: any) {
        return this.http.post(ApiService.SaveAlumniDetailsURL, data);
    }
    saveContactUsDetails(data: any) {

        return this.http.post(ApiService.saveContactUsDetailsURL, data);
    }
    getNewsDataById(institute_id: any) {
        return this.http.get(ApiService.getNewsByIdDetailsURL + institute_id);
    }

    getAllNewsDataForInstitute(institute_id: any) {
        return this.http.get(ApiService.getAllNewsDetailsURL + institute_id);
    }
}