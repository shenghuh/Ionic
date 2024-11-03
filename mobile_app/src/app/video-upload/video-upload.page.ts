import { Component } from '@angular/core';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.page.html',
  styleUrls: ['./video-upload.page.scss'],
})
export class VideoUploadPage {
  selectedVideo: File | null = null;
  processedVideoUrl: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedVideo = input.files[0];
      this.processedVideoUrl = URL.createObjectURL(this.selectedVideo); // Preview original video before processing
    }
  }

  async processVideo() {
    if (!this.selectedVideo) {
      alert('Please select a video first.');
      return;
    }

    // Simulate "processing" to display the second half of the video
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(this.selectedVideo);

    videoElement.onloadedmetadata = () => {
      const halfDuration = videoElement.duration / 2;
      
      // Mock "processed" video as the second half of the original video
      this.processedVideoUrl = `${videoElement.src}#t=${halfDuration}`;
    };
  }
}
