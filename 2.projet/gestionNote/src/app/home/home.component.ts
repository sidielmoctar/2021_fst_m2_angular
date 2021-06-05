import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {TypeAlert} from "../enum/type-alert";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typeAlert = TypeAlert;
  constructor() { }

  ngOnInit(): void {
  }


}
