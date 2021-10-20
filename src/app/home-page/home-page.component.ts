import { Subscription } from 'rxjs'
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-header.component.scss',
    './home-section.component.scss',
  ]
})
export class HomePageComponent{
  @ViewChild(NgScrollbar) scrollRef!: NgScrollbar;
  @ViewChild('firstSection') firstSection!: ElementRef;

  scrollToSections = () => {
    this.scrollRef.scrollToElement(this.firstSection, { duration: 600 });
  }
}

