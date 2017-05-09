import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../dto/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private user:User;
  @ViewChild('addUserForm') private addUserForm: NgForm;
  
  constructor(private userService:UserService) {
    this.user=new User("");
  }

  ngOnInit() {
  }

  private onSubmit(){
    this.userService.add(this.user);
    console.log("ADD USER "+this.user.toString());
    this.user=new User("");
    this.addUserForm.form.reset();
  }

  private diagnostic() { return JSON.stringify(this.user); }

}
