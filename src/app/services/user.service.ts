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

  getUserByName(userName: Signal<string | null>) {
    return httpResource<User[]>(() => {
      const name = userName().trim();
      if (!name) return null;

      return {
        url: 'https://jsonplaceholder.typicode.com/users',
        params: { q: name },
      };
    });
  }
  createUser(userSignal: Signal<User | null>) {
    return httpResource<User>(() => {
      const user = userSignal();

      if (!user) return null; // 🚫 no request

      return {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: user,
      };
    });
  }

  // 🔹 UPDATE (PUT / PATCH)
  updateUser(updateSignal: Signal<{ id: number; data: Partial<User> } | null>) {
    return httpResource<User>(() => {
      const payload = updateSignal();
      if (!payload) return null;

      return {
        url: `https://jsonplaceholder.typicode.com/users/${payload.id}`,
        method: 'PATCH', // change to PUT if needed
        body: payload.data,
      };
    });
  }

  // 🔹 DELETE
  deleteUser(deleteId: Signal<number | null>) {
    return httpResource(() => {
      const id = deleteId();
      if (!id) return null;

      return {
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: 'DELETE',
      };
    });
  }
}
