import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getMenData():Observable<any>{

    return this.hc.get<any>("http://localhost:3000/men")

  }  

  getWomenData():Observable<any>{

    return this.hc.get<any>("http://localhost:3000/women")
    
  }  

  getKidsData():Observable<any>{

    return this.hc.get<any>("http://localhost:3000/kids")

  }  
}
