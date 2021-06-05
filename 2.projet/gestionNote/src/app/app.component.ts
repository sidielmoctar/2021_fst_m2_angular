import {Component, OnInit} from '@angular/core';
import * as db from '../assets/database.json';
import {DataService} from "./services/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionNote';


  constructor(private dataService : DataService) {
  }

  ngOnInit(): void {

    this.dataService.users = db;

  }


}
