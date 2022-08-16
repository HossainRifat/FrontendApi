import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { mainInvestor } from '../model/main_investor.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  company:any;
  readonly BaseUrl = "https://localhost:44382/api/";

  constructor(private http:HttpClient) { }

  // Investor

  login(login:Login):Observable<any>{
    return this.http.post(this.BaseUrl + 'investor/login',login);
  }

  getInvestorList():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'investor/get/all')
  }

  createInvestorList(investor3:mainInvestor):Observable<mainInvestor> {
    return this.http.post<mainInvestor>(this.BaseUrl + 'investor/create',investor3)
  }

  updateInvestor(id:number|string, data:any){
    return this.http.post(this.BaseUrl + `investor/update/${id}`,data)
  }

  deleteInvestor(id:number|string){
    return this.http.get(this.BaseUrl + `investor/delete/${id}`);
  }

  // Idea

  getIdea():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'idea/get/all',
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  getCompany(company:string):Observable<any> {
    return this.http.get<any>(this.BaseUrl + `idea/company/${company}`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  getConfirmedIdea():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'idea/get/confirmed',
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  getProfile() {
    return this.http.get(this.BaseUrl + `investor/profile`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  setCompanyName(name:any){
    this.company=name;
  }

  getCompanyName(){
    return this.company;
  }

}
