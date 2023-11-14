import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftChild1Component } from "../left-child-1/left-child-1.component";
import { LeftChild2Component } from "../left-child-2/left-child-2.component";

@Component({
  selector: 'app-left',
  standalone: true,
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss',
  imports: [CommonModule, LeftChild1Component, LeftChild2Component],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LeftComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('left component');
  }

}
