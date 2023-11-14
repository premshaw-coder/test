import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-child-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-child-1.component.html',
  styleUrl: './right-child-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RightChild1Component implements DoCheck {
  ngDoCheck(): void {
    console.log('right-child-1 component');
  }

}
