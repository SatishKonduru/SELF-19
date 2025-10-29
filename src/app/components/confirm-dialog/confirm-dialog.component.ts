import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
  // constructor(
  //   private dialogRef: MatDialogRef<ConfirmDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  // ) {}

  private dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  data = inject<{ title: string; message: string }>(MAT_DIALOG_DATA);

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
