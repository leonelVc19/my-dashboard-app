import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    SideMenuComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: '',
})


export default class DashboardComponent {

}
