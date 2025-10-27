import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isLoggedInStatus = true;
      localStorage.setItem('token', 'sample-token');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus || !!localStorage.getItem('token');
  }
}
