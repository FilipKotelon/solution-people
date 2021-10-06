import { PopupMessageService } from './shared/services/popup-message.service'
import { DetectSwipeDirective } from './shared/directives/detect-swipe.directive'
import { CursorService } from './shared/services/cursor.service'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SliderComponent } from './slider/slider.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { HoverEnlargeCursorDirective } from './shared/directives/hover-enlarge-cursor.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { StoryComponent } from './stories-page/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    SolutionsPageComponent,
    ContactPageComponent,
    StoriesPageComponent,
    SliderComponent,
    CustomCursorComponent,
    HoverEnlargeCursorDirective,
    DetectSwipeDirective,
    PopupMessageComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [
    CursorService,
    PopupMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
