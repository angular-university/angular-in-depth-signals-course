import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'upload-demo',
  templateUrl: './upload-demo.html',
})
export class UploadDemo {

  http = inject(HttpClient);

  progress = signal(0);

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
    this.error.set('');
    this.uploading.set(true);

    this.subscription = this.http
      .post('/api/uploads', body, { observe: 'events', reportUploadProgress: true })
      .subscribe({
        next: (event) => this.onEvent(event),
        error: () => this.onError(),
      });
  }

  onEvent(event: HttpEvent<unknown>) {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.set(Math.round((100 * event.loaded) / (event.total ?? event.loaded)));
      return;
    }
    if (event.type === HttpEventType.Response) {
      this.uploading.set(false);
    }
  }

  onError() {
    this.error.set('Upload failed');
    this.uploading.set(false);
  }

  cancel() {
    this.subscription?.unsubscribe();
    this.uploading.set(false);
  }

}
