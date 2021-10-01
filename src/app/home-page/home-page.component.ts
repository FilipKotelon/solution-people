import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-header.component.scss',
    './home-section.component.scss',
  ]
})
export class HomePageComponent {
  
}
// export class HomePageComponent implements OnInit, OnDestroy, AfterViewInit {
//   documentHTML = document.querySelector('html');
//   @ViewChildren('homeSection') sectionsList!: QueryList<any>;
//   sections: ElementRef[] = [];
//   currentSectionId = 0;
//   scrollTimeout!: ReturnType<typeof setTimeout>;
//   listenToWheel = true;

//   constructor(){}

//   ngOnInit(){
    
//   }

//   ngOnDestroy(){
//     document.removeEventListener('wheel', this.onWheel);
//     document.removeEventListener('scroll', this.onScroll);
//     this.documentHTML?.classList.remove('no-scroll');
//     console.log(this.sectionsList)
//   }

//   ngAfterViewInit(){
//     document.addEventListener('wheel', this.onWheel);
//     document.addEventListener('scroll', this.onScroll);

//     this.documentHTML?.classList.add('no-scroll');
//     this.sections = this.sectionsList.toArray();

//     this.scrollToCurrentSection();
//   }

//   onWheel = (e: WheelEvent) => {
//     if(e.deltaY && this.listenToWheel){
//       console.log(e.deltaY, this.listenToWheel);
//       const startId = this.currentSectionId;

//       if(e.deltaY > 0 && this.currentSectionId + 1 < this.sections.length){
//         this.currentSectionId++;
//       } else if(e.deltaY < 0 && this.currentSectionId - 1 >= 0) {
//         this.currentSectionId--;
//       }

//       if(startId !== this.currentSectionId){
//         this.scrollToCurrentSection();
//       }
//     }
//   }

//   onScroll = () => {
//     this.listenToWheel = false;
//     console.log(this.listenToWheel, 'scroll');

//     clearTimeout(this.scrollTimeout);
//     this.scrollTimeout = setTimeout(() => {
//       this.listenToWheel = true;
//       console.log(this.listenToWheel, 'end');
//     }, 500);
//   }

//   scrollToCurrentSection = () => {
//     this.sections[this.currentSectionId].nativeElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }
