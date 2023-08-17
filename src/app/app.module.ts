import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
