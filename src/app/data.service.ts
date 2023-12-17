import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subject: BehaviorSubject<any> = new BehaviorSubject('yo')
  $taskDatas:Observable<any>=this.subject.asObservable()
  constructor() {
  }

  createtask(taskData: any) {
    this.subject.next(taskData) //current value emitted
    this.$taskDatas.subscribe((data)=>{
      console.log('Data', data)
  })
  }

  getAllTask() {
    this.subject.asObservable().subscribe((data) => {
      console.log('subject', data)
    })
  }
}
