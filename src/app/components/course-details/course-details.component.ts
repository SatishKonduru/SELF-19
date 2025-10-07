import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Material', tutor: 'Satish' },
    { id: 4, name: 'Bootstrap', tutor: 'Satish Konduru' },
    { id: 5, name: 'NodeJS', tutor: 'Renu' },
  ];
  courseKeys: string[] = [];
  courseId: number;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p) => {
      if (p) {
        this.courseId = parseInt(p.get('id'));
      }
    });
    this.courseKeys = Object.keys(this.courseList[0]);
  }

  onSelect(course: any) {
    console.log('Selected Course: ', course);
    // this.router.navigate(['/selectedCourse', JSON.stringify(course)]);
    this.router.navigate(['/selectedCourse'], {
      queryParams: { course: JSON.stringify(course) },
    });
  }
}
