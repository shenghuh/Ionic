import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoUploadPageRoutingModule } from './video-upload-routing.module';

import { VideoUploadPage } from './video-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoUploadPageRoutingModule
  ],
  declarations: [VideoUploadPage]
})
export class VideoUploadPageModule {}
