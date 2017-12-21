import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-user-input-table',
  templateUrl: './user-input-table.component.html',
  styleUrls: ['./user-input-table.component.css']
})
export class UserInputTableComponent implements OnInit {
  @Input()
  user: UserModel;
  firstName: string;

  constructor(private addUserService: AddUserService) { }
    
  ngOnInit() {
  }

  createUser() : UserModel {
    return new UserModel(this.firstName);
  }

  addUser(): any {
    return this.addUserService.addUser(this.createUser());
  }


}
