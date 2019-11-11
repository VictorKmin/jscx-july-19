import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    course: 1,
    group_id: 1,
    role_id: 1,
  };

  constructor(private userService: UserService) {
  }

  creteUser() {
    this.userService.createUser(this.user)
      .subscribe(() => {});
  }
}
