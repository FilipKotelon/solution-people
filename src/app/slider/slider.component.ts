import { Slide } from './../shared/models/slide.model'
import { Component, Input, OnInit } from '@angular/core';
import { Direction, DirectionPair } from '../shared/directives/detect-swipe.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides!: Slide[];
  currentSlide = 0;
  infoClosed = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  onSwipe = (directionPair: DirectionPair) => {
    if(directionPair.horizontal === Direction.Left){
      this.nextSlide();
    } else if(directionPair.horizontal === Direction.Right){
      this.prevSlide();
    }
  }

  nextSlide(){
    if(this.currentSlide + 1 === this.slides.length){
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  prevSlide(){
    if(this.currentSlide - 1 < 0){
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  closeInfo = () => {
    this.infoClosed = true;
  }
}
