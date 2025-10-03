import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  imports: [],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
})
export class SelectedCourseComponent {
  myCourse: any;
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p) => (this.myCourse = JSON.parse(p.get('course')))
    );
  }
}
