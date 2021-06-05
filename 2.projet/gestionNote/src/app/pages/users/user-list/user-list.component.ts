import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/iuser";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : IUser [] = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.users = {...this.dataService.users};
    console.log(" users ======= ", this.users)
  }

}
