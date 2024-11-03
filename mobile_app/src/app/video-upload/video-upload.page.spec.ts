import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoUploadPage } from './video-upload.page';

describe('VideoUploadPage', () => {
  let component: VideoUploadPage;
  let fixture: ComponentFixture<VideoUploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
