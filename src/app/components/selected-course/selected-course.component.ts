import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-selected-course',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
})
export class SelectedCourseComponent {
  myCourse: any;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(
    //   (p) => (this.myCourse = JSON.parse(p.get('course')))
    // );
    this.activatedRoute.queryParamMap.subscribe(
      (p) => (this.myCourse = JSON.parse(p.get('course')))
    );
  }
  goBack() {
    this.router.navigate(['/courseDetails']);
  }
}
