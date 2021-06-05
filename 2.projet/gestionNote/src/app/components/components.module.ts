import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  exports: [
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
