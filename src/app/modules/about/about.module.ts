import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
