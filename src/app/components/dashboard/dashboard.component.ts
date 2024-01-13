import { Component } from '@angular/core';
import { WishListComponent } from '../wish-list/wish-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WishListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
