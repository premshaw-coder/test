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
import { ActivatedRoute, RouterModule } from '@angular/router';
import data from '../../assets/data.json'

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
  id!:string

  constructor(private dataService: DataService, private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    console.log('this.route.snapshot.params', this.route.snapshot.params)
    this.initialForm(data.find(task=>task.id == +this.id))

  }

  initialForm(data?:any) {
    this.formGroup = new FormGroup({
      status: new FormControl(data?.status || 'To Do'),
      priority: new FormControl(data?.priority || ''),
      dueDate: new FormControl(data?.dueDate || ''),
      taskName: new FormControl(data?.taskName || ''),
      taskDescription: new FormControl(data?.taskDescription || '')
    });
  }

  saveFormData() {
    if (this.formGroup.invalid) {
      return this.formGroup.markAllAsTouched()
    }
    let data2 = this.formGroup.value
    data2.id = this.id || +new Date()
    if (this.id) {
      let index = data.findIndex((task:any)=>task.id == +this.id)
      data[index]=data2
    }
    else this.dataService.createtask(data2)
  }

}
