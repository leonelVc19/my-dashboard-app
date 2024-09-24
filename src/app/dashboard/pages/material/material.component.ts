import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { OptionsBottonSheetComponent } from './ui/options-botton-sheet/options-botton-sheet.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule, MatSlideToggleModule, MatIconModule, MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule
  ],
  templateUrl: './material.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent { 
  private _bottomSheet = inject(MatBottomSheet);
  
  public openBottomSheet(){
    this._bottomSheet.open(OptionsBottonSheetComponent);
  }
}
