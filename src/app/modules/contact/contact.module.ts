import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [EmailFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    Ng2TelInputModule,
  ]
})
export class ContactModule { }
