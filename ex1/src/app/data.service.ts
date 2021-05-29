import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  students = [
    {
      name: 'Ali',
      age: 20,
    },
    {
      name: 'Oumar',
      age: 22,
    },
    {
      name: 'Amadou',
      age: 21,
    },
    {
      name: 'Fatimetou',
      age: 22,
    },
    {
      name: 'Aicha',
      age: 24,
    },
    {
      name: 'Sidi',
      age: 25,
    },
  ];

  constructor() {}

  getStudent(): any[] {
    return this.students;
  }
}
