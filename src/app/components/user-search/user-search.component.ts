import { httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-user-search',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css',
})
export class UserSearchComponent {
  searchText = signal('');
  // debouncedText = computed(() => this.searchText().trim());
  private _userService = inject(UserService);
  user = this._userService.getUserByName(this.searchText);
}
