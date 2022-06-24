import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monthly-expenses';


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  expenseForm = new FormGroup({
    name: new FormControl(''),
  });
  constructor(
    private renderer: Renderer2
  ) {
    
  }


  addProperty() {
 
    const input = this.renderer.createElement('input');
    const label = document.createElement("label");

    label.setAttribute('for', this.expenseForm.value.name);
    label.innerHTML = this.expenseForm.value.name;
    label.setAttribute('type', 'text');
    label.setAttribute('formcontrolname', this.expenseForm.value.name);
    document.getElementById('form')?.appendChild(label)

    this.renderer.setProperty(input, 'id', this.expenseForm.value.name);
    this.renderer.setProperty(input, 'type', "text");
    this.renderer.setProperty(input, 'formcontrolname', this.expenseForm.value.name);

    this.renderer.appendChild(document.getElementById('form'), label);
    this.renderer.appendChild(document.getElementById('form'), input);
    this.profileForm.addControl(this.expenseForm.value.name, new FormControl(this.expenseForm.value.name))
    console.warn(this.profileForm.value);

    sessionStorage.setItem('expenses', this.profileForm.value)
    return label;
  }


  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
