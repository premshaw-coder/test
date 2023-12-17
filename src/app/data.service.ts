import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  subject: BehaviorSubject<any> = new BehaviorSubject({})
  $taskDatas: Observable<any[]> = this.subject.asObservable()
  constructor() {
    this.$taskDatas.subscribe(data => {
      console.log(data);

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
