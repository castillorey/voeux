import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoeuxComponent } from '../voeux/voeux.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, VoeuxComponent],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

}
