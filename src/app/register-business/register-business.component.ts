import { Component, OnInit } from '@angular/core';
import { UserService } from "../_service/UserService/user.service";


@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css'],
  providers: [UserService]
})
export class RegisterBusinessComponent implements OnInit {

    userModel: any = {};

    constructor(
        private userService: UserService,
        ) { }

register(model:any) {
    console.log(model);
    this.userService.addClientWithObservable(model).subscribe((data) => {
        console.log("what is in the data ", data);
      });
    }

  ngOnInit() {
  }

}