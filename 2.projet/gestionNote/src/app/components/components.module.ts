import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { AlertFactoryComponent } from './alert-factory/alert-factory.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    AlertFactoryComponent
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    AlertFactoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
