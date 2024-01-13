import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voeux',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voeux.component.html',
  styleUrls: ['./voeux.component.css']
})
export class VoeuxComponent {
  @Input() title : string | undefined = 'Sin titulo';
  @Input() description : string | undefined = '';
}
