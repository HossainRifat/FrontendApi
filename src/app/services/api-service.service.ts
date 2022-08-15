import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly BaseUrl = "https://localhost:44382/api/";

  constructor(private http:HttpClient) { }

  // Investor

  getInvestorList():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'investor/get/all')
  }

  createInvestorList(data:any) {
    return this.http.post(this.BaseUrl + 'investor/create',data)
  }

  updateInvestor(id:number|string, data:any){
    return this.http.post(this.BaseUrl + `investor/update/${id}`,data)
  }

  deleteInvestor(id:number|string){
    return this.http.get(this.BaseUrl + `investor/delete/${id}`);
  }

  // Idea

  getIdea():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'idea/get/all')
  }

  getConfirmedIdea():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'idea/get/confirmed')
  }

  getProfile() {
    return this.http.get(this.BaseUrl + `investor/get/rh140025@gmail`);
  }

}
