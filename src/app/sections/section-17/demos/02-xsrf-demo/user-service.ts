import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface Profile {
  authorization: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  http = inject(HttpClient);

  profile = signal<Profile | null>(null);

  async load() {
    try {
      const profile = await firstValueFrom(this.http.get<Profile>('/api/profile'));
      this.profile.set(profile);
    } catch {
      this.profile.set(null);
    }
  }

}
