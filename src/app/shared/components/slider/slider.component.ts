import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit,
  QueryList, ViewChild,
} from '@angular/core';

import {SliderItemComponent} from './slider-item.component';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SliderComponent implements AfterViewInit, OnInit {
  slides: SliderItemComponent[] = [];
  activeSlide = 0;
  background: string;
  switching = false;
  showTitle = true;
  showSubTitle = true;
  showDescription = true;
  showButton = true;
  screenWidth: any;

  @ContentChildren(SliderItemComponent) slidesQuery: QueryList<SliderItemComponent> | undefined;
  @ViewChild('title') title: ElementRef | undefined;
  @ViewChild('subTitle') subTitle: ElementRef | undefined;
  @ViewChild('description') description: ElementRef | undefined;
  @ViewChild('button') button: ElementRef | undefined;
  @Input('show') show = false;

  constructor(private changeDetector: ChangeDetectorRef,
              private translate: TranslateService) {
  }

  ngAfterViewInit() {
    this.slidesQuery.forEach((slide: SliderItemComponent) => {
      this.slides.push(slide);
    });
    this.setSlides();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.translate.onLangChange.subscribe(() => {
      this.Slide(0);
    });
  }

  Slide(item) {
    this.activeSlide = item;
    this._switchSlide();
  }

  setSlides(): void {
    const slide = this.slides[this.activeSlide];
    this.title.nativeElement.innerText = slide.getTitle();
    this.subTitle.nativeElement.innerText = slide.getSubTitle();
    this.description.nativeElement.innerText = slide.getDescription();
    this.button.nativeElement.innerText = slide.getButton();
    this.showTitle = slide.getTitle().trim() !== '';
    this.showSubTitle = slide.getSubTitle().trim() !== '';
    this.showDescription = slide.getDescription().trim() !== '';
    this.showButton = slide.getButton().trim() !== '';
    if (this.screenWidth < 768) {
      this.showTitle = this.showTitle && slide.isTitleVisibleOnMobile();
      this.showButton = this.showButton && slide.isButtonVisibleOnMobile();
    }
    this.background = slide.background;
    this._detectChanges();
  }

  nextSlide(): void {

    if (this.activeSlide === this.slidesQuery.length - 1) {
      this.activeSlide = 0;
    } else {
      this.activeSlide++;
    }
    this._switchSlide();
  }

  prevSlide(): void {
    if (this.activeSlide === 0) {
      this.activeSlide = this.slidesQuery.length - 1;
    } else {
      this.activeSlide--;
    }
    this._switchSlide();
  }

  private _switchSlide() {
    this.switching = true;
    setTimeout(() => {
      this.switching = false;
      this.setSlides();
    }, 500);
  }

  private _detectChanges(): void {
    this.changeDetector.markForCheck();
  }
}
