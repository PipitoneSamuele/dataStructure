import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './data-structure/tree/tree.component';
import { HomeCardsComponent } from './tabs/home-cards/home-cards.component';
import { AboutComponent } from './core/about/about.component';
import { LinkedListComponent } from './data-structure/linked-list/linked-list.component';

const routes: Routes = [
  {path: 'tree', component: TreeComponent},
  {path: 'linked-list', component: LinkedListComponent},
  {path: 'data-structures', component: HomeCardsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
