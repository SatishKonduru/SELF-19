import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-tdf-register',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    // MatTableModule,
    MatCheckboxModule,
  ],
  templateUrl: './tdf-register.component.html',
  styleUrl: './tdf-register.component.css',
})
export class TdfRegisterComponent {
  // 🔹 SIGNALS (Form State)
  username = signal('');
  email = signal('');
  gender = signal('male');
  country = signal('');
  acceptTerms = signal(false);

  countries = ['India', 'USA', 'UK', 'Australia'];

  onSubmit(form: any) {
    if (form.valid) {
      console.log({
        username: this.username(),
        email: this.email(),
        gender: this.gender(),
        country: this.country(),
      });
    }
  }

  resetForm(form: any) {
    form.resetForm();
    this.username.set('');
    this.email.set('');
    this.gender.set('male');
    this.country.set('');
  }
}
