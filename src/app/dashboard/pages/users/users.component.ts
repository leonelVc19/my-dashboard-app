import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ TitleComponent, CommonModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

}
