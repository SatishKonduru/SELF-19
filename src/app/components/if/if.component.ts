import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-if',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
})
export class IfComponent {
  isLoggedIn = true;
  user = { name: 'Satish Konduru', isAdmin: true };
  username = '';
}
