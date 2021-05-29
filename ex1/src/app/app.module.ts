import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FirstComponent } from './first/first.component';
import { After21Pipe } from './after21.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    FirstComponent, After21Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
