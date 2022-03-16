import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private hc:HttpClient) { }


  getMenDataById(id):Observable<any>{
     return this.hc.get('http://localhost:3000/men/'+id)
  }

  getWomenDataById(id):Observable<any>{
    return this.hc.get('http://localhost:3000/women/'+id)
 }

 getKidsDataById(id):Observable<any>{
  return this.hc.get('http://localhost:3000/kids/'+id)
}
 
}
