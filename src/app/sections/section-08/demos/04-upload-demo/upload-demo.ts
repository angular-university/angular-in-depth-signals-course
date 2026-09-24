import { Component, computed, inject, signal } from '@angular/core';
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

  upload = signal<Subscription | undefined>(undefined);

  uploading = computed(() => this.upload() !== undefined);

  start(files: FileList | null) {
    const file = files?.[0];
    if (!file) {
      return;
    }
    const body = new FormData();
    body.append('file', file);
    this.progress.set(0);
    this.error.set('');
    const upload = this.http
      .post('/api/uploads', body, { observe: 'events', reportUploadProgress: true })
      .subscribe({
        next: (event) => this.onEvent(event),
        error: () => this.onError(),
      });
    this.upload.set(upload);
  }

  onEvent(event: HttpEvent<unknown>) {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.set(Math.round((100 * event.loaded) / (event.total ?? event.loaded)));
      return;
    }
    if (event.type === HttpEventType.Response) {
      this.upload.set(undefined);
    }
  }

  onError() {
    this.error.set('Upload failed');
    this.upload.set(undefined);
  }

  cancel() {
    this.upload()?.unsubscribe();
    this.upload.set(undefined);
  }

}
