import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() userForm: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  get getControl(){
    return this.userForm.controls
  }

}
