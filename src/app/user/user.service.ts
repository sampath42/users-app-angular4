import { User } from './user';
import { Http,HttpModule } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User){
    return this._http.post("/users",user)
    .map(data=>data.json()).toPromise()
  }

  destroy(user: User){
    return this._http.delete("/users/"+user._id)
    .map(data=>data.json()).toPromise()
  }

  update(user: User){
    return this._http.put("/users/"+user._id,user)
    .map(data=>data.json()).toPromise()
  }

  getUsers(){
    var usersArray= [];
    var user = new User(1,'firstName','lastName','email@email.com');
    usersArray.push(user);
    //return this._http.get("/users")
    return usersArray//.map(data=>data.json())//.toPromise()
  }

  getUser(user: User){
    return this._http.get("/users/"+user._id)
    .map(data=>data.json()).toPromise()
  }

}
