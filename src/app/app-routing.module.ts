import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SolutionsPageComponent } from "./solutions-page/solutions-page.component";
import { StoriesPageComponent } from "./stories-page/stories-page.component";

const appRoutes: Routes = [
  { 
    path: '',
    component: HomePageComponent,
    data: {
      animation: '1'
    }
  },
  { 
    path: 'our-solutions',
    component: SolutionsPageComponent,
    data: {
      animation: '2'
    }
  },
  { 
    path: 'user-stories',
    component: StoriesPageComponent,
    data: {
      animation: '3'
    }
  },
  { 
    path: 'contact',
    component: ContactPageComponent,
    data: {
      animation: '4'
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}