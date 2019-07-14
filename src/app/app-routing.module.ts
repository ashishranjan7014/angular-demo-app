import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GetdataComponent } from './getdata/getdata.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/signup",
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "getdata",
    component: GetdataComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const configRoutes = [
  SignupComponent,
  GetdataComponent,
  PageNotFoundComponent
];
