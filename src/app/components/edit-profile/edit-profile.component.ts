import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { map, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-profile',
  imports: [
    RouterLink,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  // isSaved = true;
  // user = {
  //   name: 'Satish Konduru',
  //   email: 'satish@example.com',
  //   bio: 'Full Stack Developer',
  // };
  // onInputChange() {
  //   this.isSaved = false;
  // }
  // saveChanges() {
  //   this.isSaved = true;
  //   alert('Profile saved successfully!');
  // }
  // // The guard will check this property to know whether changes are unsaved
  // hasUnsavedChanges(): boolean {
  //   return !this.isSaved;
  // }
  user = {
    name: 'Satish Konduru',
    email: 'satish@example.com',
    bio: 'Full Stack Developer',
  };

  isSaved = true;

  private dialog = inject(MatDialog);

  onInputChange() {
    this.isSaved = false;
  }

  saveChanges() {
    this.isSaved = true;
    alert('Profile saved successfully!');
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.isSaved) {
      return true;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Unsaved Changes',
        message: 'You have unsaved changes. Do you really want to leave?',
      },
    });

    return dialogRef.afterClosed().pipe(map((result) => !!result));
  }
}
