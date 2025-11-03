import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CourseDetailsComponent } from '../course-details/course-details.component';
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
  showDetails = signal(false);

}
