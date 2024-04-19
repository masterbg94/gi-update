import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef,
  OnInit,
  QueryList, ViewChild
} from '@angular/core';
import {SliderFooterItemComponent} from './slider-item-footer.component';
import {TranslateService} from "@ngx-translate/core";


@Component({

  selector: 'app-slider-footer',
  templateUrl: './slider-footer.component.html',
  styleUrls: ['./slider-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderFooterComponent implements AfterViewInit, OnInit {

  slides: SliderFooterItemComponent[] = [];

  activeSlide = 0;

  switching = false;

  @ContentChildren(SliderFooterItemComponent) slidesQuery: QueryList<SliderFooterItemComponent>;

  @ViewChild('description') description: ElementRef;
  @ViewChild('name') name: ElementRef;

  activeProfileImage: string;

  constructor(private changeDetector: ChangeDetectorRef, private translateDefault: TranslateService) {


  }

  ngAfterViewInit() {


    this.slidesQuery.forEach((slide: SliderFooterItemComponent) => {

      this.slides.push(slide);

    });
    this.setSlide();

  }

  ngOnInit() {
    this.translateDefault.onLangChange.subscribe(() => {
      this.slide(0);
    });

  }

  slide(item) {
    this.activeSlide = item;
    this._switchSlide();
  }


  setSlide(): void {

    const slide = this.slides[this.activeSlide];

    this.description.nativeElement.innerText = slide.getDescription();

    this.name.nativeElement.innerText = slide.getName();

    this.activeProfileImage = slide.profile;

    this._detectChanges();
  }

  Slide(item: any): void {
    this.activeSlide = item;
    this._switchSlide();
  }

  private _switchSlide() {
    this.switching = true;

    setTimeout(() => {

      this.switching = false;
      this.setSlide();
    }, 500);
  }

  private _detectChanges(): void {

    this.changeDetector.markForCheck();
  }
}

