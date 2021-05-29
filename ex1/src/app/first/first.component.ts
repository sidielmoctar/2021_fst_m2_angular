import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  nbrEtudiants = 0;
  etudiants : any[] = [];
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.nbrEtudiants = this.data.getStudent().length;
    this.etudiants = this.data.getStudent();
  }

}
