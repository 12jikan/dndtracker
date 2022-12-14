import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

const components: any[] = [
  NavbarComponent
];

@NgModule({
  declarations: [
    components
  ],
  exports: [
    components
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
