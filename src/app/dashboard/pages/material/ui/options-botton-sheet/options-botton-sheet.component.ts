import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-options-botton-sheet',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule
  ],
  templateUrl: './options-botton-sheet.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottonSheetComponent { 

  openLink(event: MouseEvent): void {
    console.log(event);
    
    event.preventDefault();
  }
}
