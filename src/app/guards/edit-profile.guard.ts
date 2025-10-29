import { CanDeactivateFn } from '@angular/router';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { map } from 'rxjs';

export const editProfileGuard: CanDeactivateFn<EditProfileComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // If no unsaved changes → allow navigation
  // if (!component.hasUnsavedChanges()) {
  //   return true;
  // }

  // Inject MatDialog dynamically (no constructor needed)
  const dialog = inject(MatDialog);

  // Open confirmation dialog
  const dialogRef = dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: {
      title: 'Unsaved Changes',
      message:
        'You have unsaved changes. Do you really want to leave this page?',
    },
  });

  // Return Observable<boolean> to the router
  return dialogRef.afterClosed().pipe(map((result) => !!result));
};
