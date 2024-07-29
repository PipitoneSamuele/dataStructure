import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent implements OnInit {

  checkoutForm: FormGroup;
  treeValues: [];

  ngOnInit(): void {
      this.checkoutForm = new FormGroup({
        treeDataInput: new FormControl('')
      });
  }

  onSubmit() {
    this.treeValues = this.checkoutForm.get("treeDataInput")?.value.split("-");
    console.log(this.treeValues);
  }

}
