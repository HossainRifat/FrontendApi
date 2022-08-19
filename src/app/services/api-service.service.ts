import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { mainInvestor } from '../model/main_investor.model';
import { Offer } from '../model/offer.model';

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

  updateInvestor(data:any){
    return this.http.post(this.BaseUrl + `investor/update`,data,{headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  deleteInvestor(id:number|string){
    return this.http.get(this.BaseUrl + `investor/delete/${id}`);
  }

  getProfile() {
    return this.http.get(this.BaseUrl + `investor/profile`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  Logout(){
    return this.http.get(this.BaseUrl + `investor/logout`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
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

  getMyConfirmedIdea():Observable<any[]> {
    return this.http.get<any>(this.BaseUrl + 'idea/myinvestment',
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  conFirmIdea(data:any):Observable<any> {
    return this.http.post<any>(this.BaseUrl + 'idea/confirm',data,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  searchIdea(data:any):Observable<any[]> {
    return this.http.get<any[]>(this.BaseUrl + `idea/search/${data}`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  sortIdea(data:any):Observable<any[]> {
    return this.http.get<any[]>(this.BaseUrl + `idea/sort/${data}`,
    {headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }
  // Offer

  createOffer(offer:Offer):Observable<Offer>{
    return this.http.post<Offer>(this.BaseUrl+'offer/create',offer,{headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  getOffer(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl+`offer/company/${id}`,{headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  getMyOffer():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl+'offer/myoffer',{headers:new HttpHeaders({
      'Authorization':localStorage.getItem("auth") || '{}',
    })
  });
  }

  
 //Message

 createMessage(msg:any){
  return this.http.post<Offer>(this.BaseUrl+'message/create',msg,{headers:new HttpHeaders({
    'Authorization':localStorage.getItem("auth") || '{}',
  })
});
 }

 gteMessage():Observable<any[]>{
  return this.http.get<any[]>(this.BaseUrl+'messenger',{headers:new HttpHeaders({
    'Authorization':localStorage.getItem("auth") || '{}',
  })
});
}

gteConversation(data:any):Observable<any[]>{
  return this.http.get<any[]>(this.BaseUrl+`messenger/conversation/${data}`,{headers:new HttpHeaders({
    'Authorization':localStorage.getItem("auth") || '{}',
  })
});
}

  //Other
  setCompanyName(name:any){
    this.company=name;
  }

  getCompanyName(){
    return this.company;
  }

}
