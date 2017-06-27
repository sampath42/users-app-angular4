import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1,'One','b','c@c.com'),
    new User(2,'Two','b','c@c.com'),
    new User(3,'Three','b','c@c.com'),
    new User(4,'Four','b','c@c.com')
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    //this.getUsers();
  }

  getUsers(){
    this._userService.getUsers().then(users=>this.users=users)
  }

}
