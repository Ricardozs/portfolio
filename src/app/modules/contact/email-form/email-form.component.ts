import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Ng2TelInputModule} from 'ng2-tel-input';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  contactForm: FormGroup;
  test = "display {{testText}}"
  testText= "Yep"
  countryCode = '000'

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.maxLength(50), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.pattern(`[0-9]{3}-[0-9]{3}-[0-9]{4}`), Validators.required, Validators.maxLength(12)]],
      request: ['', [Validators.required, Validators.maxLength(250)]],
      message: ['', [Validators.required]],
      company: ''
    })
    this.contactForm.valueChanges.subscribe( changes => {
      let tempPhone: string = this.contactForm.controls.phone.value;
      if(tempPhone.length === 3){
        this.contactForm.controls.phone.setValue(`${tempPhone}-`)
      }
      if(tempPhone.length === 7){
        this.contactForm.controls.phone.setValue(`${tempPhone}-`)
      }
    })
  }
  countryChange(country: any) {
    this.countryCode = country.dialCode;
  }
}
