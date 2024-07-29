import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    TreeComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TreeComponent],
  exports: [
    ReactiveFormsModule
  ]
})
export class TreeModule { }
