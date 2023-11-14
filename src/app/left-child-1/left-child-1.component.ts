import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-child-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-child-1.component.html',
  styleUrl: './left-child-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LeftChild1Component implements DoCheck {
  ngDoCheck(): void {
    console.log('left-child-1 component');
  }

}
