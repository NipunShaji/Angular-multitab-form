import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() addressForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  get getControl(){
    return this.addressForm.controls
  }

}
