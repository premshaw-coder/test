import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-child-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-child-2.component.html',
  styleUrl: './right-child-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RightChild2Component implements DoCheck {
  ngDoCheck(): void {
    console.log('right-child-2 component');
  }
  data: any = 0;
  count() {
    this.data++
  }
}
