import { computed } from '@angular/core';
import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { editProfileGuard } from './guards/edit-profile.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserInsertComponent } from './components/user-insert/user-insert.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/userInsert',
    pathMatch: 'full',
  },
  {
    path: 'userInsert',
    component: UserInsertComponent,
  },
  {
    path: 'userSearch',
    component: UserSearchComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'userDetails/:id',
    // component: UserDetailsComponent,
    loadComponent: () =>
      import('./components/user-details/user-details.component').then(
        (c) => c.UserDetailsComponent
      ),
  },
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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    // canDeactivate: [editProfileGuard],
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
];
