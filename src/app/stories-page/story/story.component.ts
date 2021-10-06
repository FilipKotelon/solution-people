import { Slide } from './../../shared/models/slide.model'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() slide!: Slide;

  constructor() { }

  ngOnInit(): void {
  }

}
