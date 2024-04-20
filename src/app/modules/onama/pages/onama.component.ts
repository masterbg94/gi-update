import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './onama.component.html',
  styleUrls: ['./onama.component.scss']
})
export class OnamaComponent implements OnInit {
  public show = true;
  img = '../../../assets/img/headerOnama.png';
  public map = true;
  screenWidth: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.img = '';
    }
  }
}
