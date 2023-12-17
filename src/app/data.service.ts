import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import data from '../assets/data.json'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  subject: Subject<any> = new Subject()
  $taskDatas: Observable<any[]> = this.subject.asObservable()
  constructor() {
    this.$taskDatas.subscribe((data2: any) => {
      console.log(data2);
      data.push(data2)
    })
    //     setInterval(() => {
    // this.subject.next(+new Date)
    //     }, 500);
  }

  createtask(taskData: any) {
    console.log(taskData);

    this.subject.next(taskData) //current value emitted
  }

  getAllTask() {
    return this.$taskDatas; // Return the observable for external use
  }

}
