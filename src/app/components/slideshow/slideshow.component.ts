import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {

    // console.log( 'slideshowComponent: ', this.movies );

  }

  ngAfterViewInit(): void {

    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

    });
  }

  onSlideNext(): void {

    this.mySwiper.slideNext();
  }

  onSlidePrev(): void {

    this.mySwiper.slidePrev();
  }

}
