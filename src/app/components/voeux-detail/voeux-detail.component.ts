import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voeux-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voeux-detail.component.html',
  styleUrls: ['./voeux-detail.component.css']
})
export class VoeuxDetailComponent {
  editMode: boolean = false;
  title: string = ""
  description: string = ""
}
