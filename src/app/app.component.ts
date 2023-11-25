import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewContainerRef, WritableSignal, computed, signal } from '@angular/core';
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
    @ViewChild('newComponent', { read: ViewContainerRef }) newComponent!: ViewContainerRef
    firstNameData() {
        this.firstName.set('souvik')
    }

    lastNameData() {
        this.data.set(true)
        this.lastName.set(['souvik', 'biswas'])
    }

    ngOnInit(): void {
        // console.log('main');

    }
    data = signal(false)

    firstName: WritableSignal<string> = signal('prem')
    lastName: WritableSignal<string[]> = signal(['shaw'])

    fullName = computed(() => {
        if (this.data())
            return this.firstName() + ' ' + this.lastName()
        else {
            return ''
        }
    })

    async loadcomponent() {
        const newcomp = await (await import('./new-component/new-component.component')).NewComponentComponent
        this.newComponent.clear()
        this.newComponent.createComponent(newcomp)
    }


}


let user: any = ['souvik', 'prem']


if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker(new URL('./app.worker', import.meta.url));
    console.log('before onmessage')
    worker.onmessage = ({ data }) => {
        console.log('during onmessage')
        console.log(`page got message: ${data}`);
    };

    worker.onerror = () => {
        console.log(`page got error`);

    }
    worker.postMessage(user);
    console.log('postMessage')
} else {
    // Web Workers are not supported in this environment.
    // You should add a fallback so that your program still executes correctly.
}