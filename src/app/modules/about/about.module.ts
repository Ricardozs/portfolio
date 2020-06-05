import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


@NgModule({
  declarations: [WhoWeAreComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
