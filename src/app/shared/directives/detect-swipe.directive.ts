import { Directive, Output, EventEmitter, HostListener } from "@angular/core";

export enum Direction {
  None,
  Up,
  Right,
  Down,
  Left
}

export class DirectionPair {
  constructor(public horizontal: Direction, public vertical: Direction) {}
}

@Directive({
  selector: '[appDetectSwipe]'
})
export class DetectSwipeDirective{
  @Output() swipeDetected = new EventEmitter<DirectionPair>();

  threshold = 50;
  startDragX = 0;
  startDragY = 0;
  
  @HostListener('mousedown', ['$event']) onStartDrag = (e: MouseEvent) => {
    this.startDragX = e.clientX;
    this.startDragY = e.clientY;
  }

  @HostListener('mouseup', ['$event']) onEndDrag = (e: MouseEvent) => {
    let horizontal: Direction = Direction.None, 
        vertical: Direction = Direction.None;

    if(e.clientX > this.startDragX + this.threshold){
      horizontal = Direction.Right;
    } else if(e.clientX < this.startDragX - this.threshold) {
      horizontal = Direction.Left;
    }

    if(e.clientY > this.startDragY + this.threshold){
      vertical = Direction.Down;
    } else if(e.clientY < this.startDragY - this.threshold){
      vertical = Direction.Up;
    }

    this.startDragX = 0;
    this.startDragY = 0;
    
    this.swipeDetected.emit(
      new DirectionPair(horizontal, vertical)
    );
  }
}