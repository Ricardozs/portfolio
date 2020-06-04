import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
