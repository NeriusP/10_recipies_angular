import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { DescriptionComponent } from './description/description.component';
import { IngredientsComponent } from './description/ingredients/ingredients.component';
import { IngredientsEditComponent } from './description/ingredients/ingredients-edit/ingredients-edit.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: "", component: RecipiesComponent},
  {path: "recipie/:id", component: DescriptionComponent},
  {path: "recipie/:id/edit", component: IngredientsEditComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    DescriptionComponent,
    IngredientsComponent,
    IngredientsEditComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
