import {Component} from '@angular/core';

import {UserService} from '../../services/user.service';
import {IUserModel} from '../../models';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    user_id: undefined
  };

  constructor(private userService: UserService) {
  }

  authUser() {
    this.userService.getSinglePost(this.user.user_id)
      .subscribe((user: IUserModel) => {
        console.log('**********************************');
        console.log(user.data);
        console.log('**********************************');
        if (user) {
          localStorage.setItem('token', 'secret token');
          this.userService.user.next(user.data);
        }
      });
  }


  getUserFromSubject() {
    this.userService.user
      .pipe(take(1))
      .subscribe(userInfo => {
        console.log(userInfo);
      });
  }

  sendToken2() {
    this.userService.sendToken().subscribe((resp) => {
      console.log(resp);
    });
  }
}
