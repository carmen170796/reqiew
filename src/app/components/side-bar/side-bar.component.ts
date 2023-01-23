import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  toggle = true
 // options = this._formBuilder.group({
 //   bottom: 0,
 //   fixed: false,
 //   top: 0,
 // })

  //constructor(private _formBuilder: FormBuilder) {}

}
