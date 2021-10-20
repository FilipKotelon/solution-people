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

  endDragX = 0;
  endDragY = 0;

  //Prevents swipe on single tap
  isSwiped = false;
  
  //#region Mouse drag handle
  @HostListener('mousedown', ['$event']) onStartDrag = (e: MouseEvent) => {
    this.startDrag(e);
  }

  @HostListener('mouseup', ['$event']) onEndDrag = (e: MouseEvent) => {
    this.isSwiped = true;
    this.endDragX = e.clientX;
    this.endDragY = e.clientY;

    this.endDrag();
    this.isSwiped = false;
  }
  //#endregion
  
  //#region Touch handle
  @HostListener('touchstart', ['$event']) onStartTouch = (e: TouchEvent) => {
    this.startDrag(e);
  }

  @HostListener('touchmove', ['$event']) onMoveTouch = (e: TouchEvent) => {
    this.isSwiped = true;
    this.endDragX = e.touches[0].clientX;
    this.endDragY = e.touches[0].clientY;
  }

  @HostListener('touchend', ['$event']) onEndTouch = (e: TouchEvent) => {
    this.endDrag();
    this.isSwiped = false;
  }
  //#endregion

  startDrag = (e: MouseEvent | TouchEvent) => {
    this.startDragX = e instanceof MouseEvent ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
    this.startDragY = e instanceof MouseEvent ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;
  }

  endDrag = () => {
    if(!this.isSwiped){
      return;
    }

    let horizontal: Direction = Direction.None, 
        vertical: Direction = Direction.None;

    if(this.endDragX > this.startDragX + this.threshold){
      horizontal = Direction.Right;
    } else if(this.endDragX < this.startDragX - this.threshold) {
      horizontal = Direction.Left;
    }

    if(this.endDragY > this.startDragY + this.threshold){
      vertical = Direction.Down;
    } else if(this.endDragY < this.startDragY - this.threshold){
      vertical = Direction.Up;
    }

    this.startDragX = 0;
    this.startDragY = 0;

    this.endDragX = 0;
    this.endDragY = 0;
    
    this.swipeDetected.emit(
      new DirectionPair(horizontal, vertical)
    );
  }
}