import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CatListComponent} from "./cat-list/cat-list.component";
import {BadCatsComponent} from "./bad-cats/bad-cats.component";
import {GoodCatsComponent} from "./good-cats/good-cats.component";

const appRoutes: Routes = [
  {
    path: '', component: CatListComponent
  }
  ,
  {
    path: 'bad', component: BadCatsComponent
  }
  ,
  {
    path: 'good', component: GoodCatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
