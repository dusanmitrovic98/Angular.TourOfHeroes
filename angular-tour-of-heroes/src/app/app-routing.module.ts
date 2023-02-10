import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
