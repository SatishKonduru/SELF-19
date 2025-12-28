import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  users = httpResource<User[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/users',
  }));
}
