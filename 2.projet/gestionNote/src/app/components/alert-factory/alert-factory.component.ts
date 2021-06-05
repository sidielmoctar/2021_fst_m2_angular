import {Component, Input, OnInit} from '@angular/core';
import {TypeAlert} from "../../enum/type-alert";

@Component({
  selector: 'app-alert-factory',
  templateUrl: './alert-factory.component.html',
  styleUrls: ['./alert-factory.component.css']
})
export class AlertFactoryComponent implements OnInit {

  @Input("msg") msg = "";
  @Input("typeAlert") typeAlert = 0;
  typeAlertEnum = TypeAlert;

  constructor() { }

  ngOnInit(): void {
  }

}
