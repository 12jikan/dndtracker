import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MainpageRoutingModule } from './mainpage-routing.module';



@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ]
})
export class MainpageModule { }
