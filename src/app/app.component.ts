import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeftComponent } from "./left/left.component";
import { RightComponent } from "./right/right.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, LeftComponent, RightComponent],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        console.log('main');

    }



}
