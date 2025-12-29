import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  users = httpResource<User[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/users',
  }));

  getUserById(userId: Signal<number | null>) {
    return httpResource<User>(() => {
      const id = userId();

      if (!id) return null; // 🚫 prevents API call

      return {
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      };
    });
  }
}
