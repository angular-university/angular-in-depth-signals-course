import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface Upload {
  id: string;
  url: string;
  size: number;
}

@Component({
  selector: 'upload-demo',
  templateUrl: './upload-demo.html',
})
export class UploadDemo {

  http = inject(HttpClient);

  progress = signal(0);

  url = signal('');

  error = signal('');

  uploading = signal(false);

  subscription: Subscription | undefined;

  start(files: FileList | null) {
    const file = files?.[0];
    if (!file) {
      return;
    }
    const body = new FormData();
    body.append('file', file);
    this.progress.set(0);
    this.url.set('');
    this.error.set('');
    this.uploading.set(true);

    this.subscription = this.http
      .post<Upload>('/api/uploads', body, { observe: 'events', reportUploadProgress: true })
      .subscribe({
        next: (event) => this.onEvent(event),
        error: () => this.onError(),
      });
  }

  onEvent(event: HttpEvent<Upload>) {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.set(Math.round((100 * event.loaded) / (event.total ?? event.loaded)));
      return;
    }
    if (event.type === HttpEventType.Response) {
      this.url.set(event.body?.url ?? '');
      this.uploading.set(false);
    }
  }

  onError() {
    this.error.set('Upload failed');
    this.uploading.set(false);
  }

  cancel() {
    this.subscription?.unsubscribe();
  }

}
