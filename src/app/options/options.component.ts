import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  private addFormVisible:boolean;

  constructor() {
    this.addFormVisible=false;
  }

  ngOnInit() {
  }

  public toggleAddForm(){
    this.addFormVisible=!this.addFormVisible;
  }

  public isAddFormVisible(){
    return this.addFormVisible;
  }
}
