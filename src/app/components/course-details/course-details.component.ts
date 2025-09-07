import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Material', tutor: 'Satish' },
    { id: 4, name: 'Bootstrap', tutor: 'Satish Konduru' },
    { id: 5, name: 'NodeJS', tutor: 'Renu' },
  ];
  courseKeys: string[] = [];
  ngOnInit() {
    this.courseKeys = Object.keys(this.courseList[0]);
  }
}
