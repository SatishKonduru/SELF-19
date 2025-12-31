import { Component, inject, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-insert',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './user-insert.component.html',
  styleUrl: './user-insert.component.css',
})
export class UserInsertComponent {
  // 📦 form data as signal
  newUser = signal<User | null>(null);

  private userService = inject(UserService);
  // 📡 POST resource
  createUserResource = this.userService.createUser(this.newUser);
  submit(form: any) {
    if (form.valid) {
      this.newUser.set({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
      });
    }
  }

  updateSignal = signal<{ id: number; data: any } | null>(null);
  updateResource = this.userService.updateUser(this.updateSignal);

  update() {
    this.updateSignal.set({
      id: 1,
      data: { name: 'Updated Name' },
    });
  }

  deleteId = signal<number | null>(null);
  deleteResource = this.userService.deleteUser(this.deleteId);

  delete() {
    this.deleteId.set(1);
  }
}
