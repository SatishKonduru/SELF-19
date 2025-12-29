import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import {
  HttpClient,
  HttpClientModule,
  httpResource,
} from '@angular/common/http';
import { UserService } from '../../services/user.service';

interface User {}
@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CourseDetailsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // userName = '';
  // errorMsg = '';
  // // constructor(private _http: HttpClient) {}
  // private _http = inject(HttpClient);
  // ngOnInit() {
  //   this._http
  //     .get<any>('https://jsonplaceholder.typicode.com/users/1')
  //     .subscribe({
  //       next: (data) => (this.userName = data.username),
  //       error: (err) => (this.errorMsg = err),
  //     });
  // }
  // users = httpResource<User[]>(() => ({
  //   url: 'https://jsonplaceholder.typicode.com/users',
  // }));
  private _userService = inject(UserService);
  private _router = inject(Router);
  users = this._userService.users;
  onSelect(user: any) {
    this._router.navigate(['/userDetails', user.id]);
  }
}
