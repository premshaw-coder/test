import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet],
    // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {

    // constructor(private sdas: DataService) {
    //     sdas.$taskDatas.subscribe(data => console.log(data))
    // }

}