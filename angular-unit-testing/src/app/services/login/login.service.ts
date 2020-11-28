import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(data: Object): Observable<any>{
    return Observable.create(observer =>{
      
    })
  }
}
