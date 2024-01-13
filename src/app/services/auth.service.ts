import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { BehaviorSubject, ignoreElements } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private supabase! : SupabaseClient;
  
  constructor(private router: Router) {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );

    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);

      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        this.user.next(session!.user);
        this.router.navigate(['/dashboard']);
      }
      if (event === 'SIGNED_OUT') this.user.next(null);
      
    });
  }

  async signInWithGoogle() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async signOut() {
    await this.supabase.auth.signOut();
  }

  get currentUser() {
    return this.user.asObservable();
  }
}
