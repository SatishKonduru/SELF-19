import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-switch',
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  userRole = signal('');
}
