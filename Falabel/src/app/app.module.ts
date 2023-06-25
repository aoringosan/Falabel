import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './common/signup/signup.component';
import { SigninComponent } from './common/signin/signin.component';
import { InventoryComponent } from './life/inventory/inventory.component';
import { EditAccountComponent } from './common/edit-account/edit-account.component';
import { LifeHomeComponent } from './life/life-home/life-home.component';
import { WorkHomeComponent } from './work/work-home/work-home.component';
import { TaskListComponent } from './work/task-list/task-list.component';
import { ShortageListComponent } from './life/shortage-list/shortage-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    InventoryComponent,
    EditAccountComponent,
    LifeHomeComponent,
    WorkHomeComponent,
    TaskListComponent,
    ShortageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
