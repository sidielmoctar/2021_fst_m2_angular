import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  students = [
    {
      name : 'Ali',
      age : 20
    },
    {
      name : 'Oumar',
      age : 22
    },
    {
      name : 'Amadou',
      age : 21
    }
  ]

  constructor() { }

  getStudent() : any[] {
    return this.students;
  }
}
