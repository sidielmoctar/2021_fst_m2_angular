import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {NotFound404Component} from "./not-found404/not-found404.component";

const routes: Routes = [
  {
    path : "",
    component: AuthComponent
  },
  {
    path : "home",
    component: HomeComponent,
    children : [
      {
        path: "users",
        loadChildren: () =>
          import("./pages/users/users.module").then(
            (m) => m.UsersModule
          ),
      },
    ]
  },
  {
    path : "**",
    component : NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
