import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-for',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  fruits = ['Apple', 'Banana', 'Mango'];
  items = ['One', 'Two', 'Three'];
  users = [
    { name: 'Satish' },
    { name: 'Renu' },
    { name: 'Konduru' },
    { name: 'RSK' },
  ];
  products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 2, name: 'Mouse', inStock: false },
    { id: 2, name: 'Keyboard', inStock: true },
  ];
  categories = [
    { name: 'Fruits', items: ['Apple', 'Banana'] },
    { name: 'Dairy', items: ['Milk', 'Cheese'] },
  ];
  myObj = {
    name: 'Satish',
    role: 'Developer',
    location: 'India',
  };
  cities = ['Hyderabad', 'Bangalore', 'Chennai'];
  // cities = [];
  selectedCity = '';
}
