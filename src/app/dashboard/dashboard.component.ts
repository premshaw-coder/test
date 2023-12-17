import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import data from '../../assets/data.json'

// const data: any = []

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, DragDropModule, MatFormFieldModule, MatButtonModule,
        MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule,],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    // providers: [DataService]
})
export class DashboardComponent implements OnInit {
    taskDelete() {
        throw new Error('Method not implemented.');
    }
    localData: any = data;
    formGroup !: FormGroup

    allStatus: string[] = ['To Do', 'In Progress', 'Complete'];
    priorities: string[] = ['High', 'Medium', 'Low'];

    toDoList: any = [];

    inProgressList: any = [];
    doneList: any = [];
    constructor(private dataService: DataService) {

    }
    setData() {
        this.toDoList = this.localData?.filter((e: any) => e.status == 'To Do');
        this.inProgressList = this.localData?.filter((e: any) => e.status == 'In Progress');
        this.doneList = this.localData?.filter((e: any) => e.status == 'Complete');
    }

    ngOnInit(): void {
        this.reset();
        this.setData()
        this.dataService.$taskDatas.subscribe(() => {
            this.localData=data
            this.setData()
        })
        console.log('localData', this.localData)
    }

    // see https://stackoverflow.com/questions/53144939/angular-cdk-connecting-multiple-drop-zones-with-cdkdroplistconnectedto


    trash(id: any) {
        console.log('id', id)
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) data.splice(i, 1);
        }
        this.localData = data;
        this.setData();
    }


    drop(event: CdkDragDrop<string[]>) {
        // console.log(event)
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
    onEntered(enter: any) {
        console.log('ee', enter);
    }


    filterData(reset = false) {
        if (reset) this.reset();
        this.localData = data;
        let filter: any = this.formGroup.value;
        if (filter.dueDate) filter.dueDate.setHours(23, 59, 59)
        Object.keys(filter).forEach(key => {
            if (filter[key] !== null && filter[key] !== '') {
                if (key !== 'dueDate')
                    this.localData = this.localData.filter((each: any) => each[key] === filter[key])
                else
                    this.localData = data.filter((each: any) => new Date(each.dueDate) < filter.dueDate)
            }
        });
        this.setData();
    }

    reset() {
        this.formGroup = new FormGroup({
            status: new FormControl(''),
            priority: new FormControl(''),
            dueDate: new FormControl(''),
        });
    }

}
