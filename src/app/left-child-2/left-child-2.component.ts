import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-child-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-child-2.component.html',
  styleUrl: './left-child-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftChild2Component implements DoCheck {
  ngDoCheck(): void {
    console.log('left-child-2 component');
  }

  data: any = 0;
  count() {
    this.data++
  }
}
