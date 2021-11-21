import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'form-app';
  mainForm: any;
  showError: boolean = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(){

    this.mainForm = this.builder.group({
      main: this.builder.group({
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
        username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
      }),
      address: this.builder.group({
        billingAddress: [''],
        pinCode: [''],
        phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      }),
      card: this.builder.group({
        cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
        expiryDate: ['', [Validators.required, Validators.pattern("^[0-9]{2}/[0-9]{2}$")]],
        secureCode: ['', [Validators.required, Validators.pattern("^[0-9]{3}$")]],
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
      })
    })

  }

  public formSubmitted(){

      console.log("form submitted", this.mainForm);
      if(this.mainForm.status == 'VALID'){
        this.showError = false;
        console.log("Details provided in Form")
        console.log("Name : ", this.mainForm.value.main.name);
        console.log("Username : ", this.mainForm.value.main.username);
        console.log("Billing Address : ", this.mainForm.value.address.billingAddress);
        console.log("Pincode : ", this.mainForm.value.address.pinCode);
        console.log("Phone : ", this.mainForm.value.address.phone);
        console.log("Card Number : ", this.mainForm.value.card.cardNumber);
        console.log("Card Expiry Date : ", this.mainForm.value.card.expiryDate);
        console.log("Card CVV : ", this.mainForm.value.card.secureCode);
        console.log("Name on Card : ", this.mainForm.value.card.name);
        this.mainForm.reset()
      } else {
        this.showError = true;
      }


  }


}
