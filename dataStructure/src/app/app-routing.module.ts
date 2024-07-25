import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './data-structure/tree/tree.component';
import { HomeCardsComponent } from './tabs/home-cards/home-cards.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {path: 'tree', component: TreeComponent},
  {path: 'data-structures', component: HomeCardsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
