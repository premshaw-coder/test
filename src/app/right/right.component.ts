import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightChild2Component } from "../right-child-2/right-child-2.component";
import { RightChild1Component } from "../right-child-1/right-child-1.component";

@Component({
  selector: 'app-right',
  standalone: true,
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss',
  imports: [CommonModule, RightChild2Component, RightChild1Component],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RightComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('right component');
  }

}
