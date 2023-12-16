import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewContainerRef, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
// import data from '../assets/data.json'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

const data: any = []
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormsModule, DragDropModule, MatFormFieldModule, MatButtonModule,
        MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule,
        DialogComponent
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit {
    localData = data;
    formGroup !: FormGroup

    allStatus: string[] = ['To Do', 'In Progress', 'Complete'];
    priorities: string[] = ['High', 'Medium', 'Low'];

    toDoList: any = [];

    inProgressList: any = [];
    doneList: any = [];
    constructor(public dialog: MatDialog) {
        this.reset();
        this.setData()
    }
    setData() {
        this.toDoList = this.localData.filter((e: any) => e.status == 'To Do');
        this.inProgressList = this.localData.filter((e: any) => e.status == 'In Progress');
        this.doneList = this.localData.filter((e: any) => e.status == 'Complete');
    }
    ngOnInit(): void {
    }

    // see https://stackoverflow.com/questions/53144939/angular-cdk-connecting-multiple-drop-zones-with-cdkdroplistconnectedto


    trash(list: any[], index: any) {
        // alert('kiko!'+ index);

        list.splice(index, 1);

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


    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe((dialogFormData) => {
            this.localData.push(dialogFormData)
            data.push(dialogFormData);
            this.setData()
        });
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