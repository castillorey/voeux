import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'voeux';
  userData = signal({});

  constructor(private auth: AuthService, private router: Router) {
    this.auth.currentUser.subscribe((user) => {
      if(user || user == null)
        this.userData.set(user?.user_metadata?.['full_name']);
    });
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/signin']);
  }
}