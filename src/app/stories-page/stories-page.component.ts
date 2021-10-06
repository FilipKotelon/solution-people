import { Slide } from './../shared/models/slide.model'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-page',
  templateUrl: './stories-page.component.html',
  styleUrls: ['./stories-page.component.scss']
})
export class StoriesPageComponent implements OnInit {
  slides: Slide[] = [
    new Slide(
      'Gina Astralis',
      'Working with the Solution People was a true pleasure. I just told them that I have a problem and then immediately they said: “That’s amazing!”. So, after that there was a kind of awkward silence, beacuse, you know, saying “That’s amazing!” when somebody tells you they have a problem is maybe a little out of touch, but they followed that up with: “Because we have a solution!” and then we laughed and they actually did have a solution!',
      'assets/img/photos/stories-1.png'
    ),
    new Slide(
      'Derrick Scott',
      'I have to say that Solution People is a kind of company that you never forget working with. They sit on a bunch of donut-shaped chairs (and I mean it for real, there is not a single chair-shaped chair in their office) and they just keep thinking and looking at you once you present them your problem. It takes a couple of minutes tops and boom, they got a solution for you! Truly incredible.',
      'assets/img/photos/stories-2.png'
    ),
    new Slide(
      'Lynda Jones',
      'Do you know what charts are? I didn’t. Do you need to know what charts are? Ask the Solution People! I got this weird drawing from my receptionist and there were all sorts of circles, lines and colors all over the place and I had no idea what am I looking at. But I brought it to the Solution People and they just said, as soon as I stepped into their office: “That’s a chart!”. Outstanding!',
      'assets/img/photos/stories-3.png'
    ),
    new Slide(
      'William Hughes',
      'They gave me pizza. It solved my hunger. 10/10',
      'assets/img/photos/stories-4.png'
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
