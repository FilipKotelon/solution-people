import { Slide } from '../shared/models/slide.model'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-page',
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.scss']
})
export class SolutionsPageComponent implements OnInit {
  slides: Slide[] = [
    new Slide(
      'Our first solution',
      'Our first solution made a cooking family smile. Just look at their faces! They even have a child! Look how adorable they are. And just like us, they like pizza. Because pizza is a solution. To hunger.',
      'assets/img/photos/solution-1.png'
    ),
    new Slide(
      'Our second solution',
      'Our second solution made these two people high five. And do you see these charts in the background? These are charts. We said it, we know how charts look. You could say that charts are not an unCHARTed territory for us.',
      'assets/img/photos/solution-2.png'
    ),
    new Slide(
      'Our third solution',
      'Our third solution made this child laugh uncontrollably! What, the book made it laugh? No, it definitely wasn’t the book, it was our solution.',
      'assets/img/photos/solution-3.png'
    ),
    new Slide(
      'Our fourth solution',
      'Our fourth solution changed absolutely nothing about that beautiful landscape. Thanks to us, it is still beautiful and completely the same as it was! No problem.',
      'assets/img/photos/solution-4.png'
    ),
    new Slide(
      'The final solution',
      'The final solution is a song performed by a popular metal band named Sabaton. We are not associated with them but we needed to write this, because people keep making jokes about the word "solution" being in the title.',
      'assets/img/photos/solution-5.png'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
