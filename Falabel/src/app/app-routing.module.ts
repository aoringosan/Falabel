import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SigninComponent } from './common/signin/signin.component';
import { SignupComponent } from './common/signup/signup.component';


const routes: Routes = [
  { path: 'common/signin', component: SigninComponent },
  { path: 'common/signup/:id', component: SignupComponent },
  { path: '', redirectTo: 'common/signin', pathMatch: 'prefix' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
