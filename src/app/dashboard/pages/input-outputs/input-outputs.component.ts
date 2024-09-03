import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-outputs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './input-outputs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputsComponent { }
