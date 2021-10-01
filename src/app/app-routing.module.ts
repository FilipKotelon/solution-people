import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SolutionsPageComponent } from "./solutions-page/solutions-page.component";
import { StoriesPageComponent } from "./stories-page/stories-page.component";

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'our-solutions', component: SolutionsPageComponent },
  { path: 'user-stories', component: StoriesPageComponent },
  { path: 'contact', component: ContactPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}