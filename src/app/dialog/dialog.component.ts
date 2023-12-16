import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatSelectModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [DateAdapter]
})
export class DialogComponent implements OnInit {
  formGroup!: FormGroup<any>;
  allStatus: string[] = ['To Do', 'In Progress', 'Complete'];
  priorities: string[] = ['High', 'Medium', 'Low'];

  constructor(private dialogRef: MatDialogRef<DialogComponent>) {

  }
  ngOnInit(): void {
    this.initialForm()
  }

  initialForm() {
    this.formGroup = new FormGroup({
      status: new FormControl('To Do'),
      priority: new FormControl(''),
      dueDate1: new FormControl(''),
      taskName: new FormControl(''),
      taskDescription: new FormControl('')
    });
  }

  saveFormData() {
    if (this.formGroup.invalid) {
      return this.formGroup.markAllAsTouched()
    }
    let data = this.formGroup.value
    data.id = +new Date()
    this.dialogRef.close(data)

  }


}
