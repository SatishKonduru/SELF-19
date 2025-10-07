import { computed } from '@angular/core';
import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';

export const routes: Routes = [
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'selectedCourse/:course',
    component: SelectedCourseComponent,
  },
  {
    path: 'selectedCourse',
    component: SelectedCourseComponent,
  },
  {
    path: 'courseDetails/:id',
    component: CourseDetailsComponent,
  },
];
