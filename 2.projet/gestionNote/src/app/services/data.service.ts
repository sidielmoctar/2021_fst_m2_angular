import {Injectable} from '@angular/core';
import {IUser} from "../models/iuser";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _users: IUser [] = [];

  constructor() {
  }


  get users(): IUser[] {
    return this._users;
  }

  set users(value: IUser[]) {
    this._users = value;
  }
}
