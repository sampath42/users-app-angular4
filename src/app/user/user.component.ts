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

  create(user: User){
    this.users.push(user);
  }
  
  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i,1);
  }

  update(users: any){
    const i = this.users.indexOf(users.original);
    this.users[i]=users.edited;
    this.users[i].editable = false;
  }

  getUsers(){
    this._userService.getUsers().then(users=>this.users=users)
  }

}
