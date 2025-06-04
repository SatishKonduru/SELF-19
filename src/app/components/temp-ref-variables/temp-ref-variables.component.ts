import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-temp-ref-variables',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css',
})
export class TempRefVariablesComponent {
  message = '';
  getInputValue(value: any) {
    this.message = value;
  }
}
