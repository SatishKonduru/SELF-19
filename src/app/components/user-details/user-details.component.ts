import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = signal<number | null>(null);
  private _userService = inject(UserService);
  private _activatedRoute = inject(ActivatedRoute);
  user = this._userService.getUserById(this.userId);
  constructor() {
    this._activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.userId.set(id ? +id : null);
    });
  }
}
