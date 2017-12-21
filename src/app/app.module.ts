import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserInputTableComponent } from './components/user-input-table/user-input-table.component';
import { AddUserService } from './services/add-user.service';
import { UserComponent } from './models/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    UserInputTableComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AddUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
