import { Component, OnInit } from '@angular/core';
import { UserService } from "../_service/UserService/user.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [UserService]
})
export class HomePageComponent implements OnInit {
  clients:any = [];
  constructor(private userService: UserService) { }

  
    getClients() {
      
    }

  ngOnInit() {
     this.userService.getCountries().subscribe((data) => {
        console.log("what is in the data ", data);
        this.clients = data;
      });
  }

}
