import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, MatButtonModule, MatSelectModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  // providers: [DataService]
})
export class DialogComponent implements OnInit {
  formGroup!: FormGroup<any>;
  allStatus: string[] = ['To Do', 'In Progress', 'Complete'];
  priorities: string[] = ['High', 'Medium', 'Low'];

  constructor(private dataService: DataService) {

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
    this.dataService.createtask(data)
  }


}
