import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users = new BehaviorSubject<String[]>([]);

  constructor() {}

  public addUser(user: String): void {
    this.users.value.push(user);
  }
}
