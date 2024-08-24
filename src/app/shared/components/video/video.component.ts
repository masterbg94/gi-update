import {Component} from '@angular/core';

@Component({

  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  play = false;

  playingVideo() {
    this.play = !this.play;
  }
}
