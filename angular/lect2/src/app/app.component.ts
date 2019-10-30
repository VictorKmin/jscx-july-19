import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  error = false;

  errorStyle = {
    backgroundColor: this.error ? 'indianred' : 'green',
    color: this.error ? 'green' : 'indianred'
  }

  employee = {
    name: 'Vova',
    gender: 'female',
    js: false,
    java: '',
    php: true,
    position: ''
  };


  pipeString = 'Some Random String';
  pipeNumber = 22.8378238239487342983204920492;
  pipePercent = 0.3;
  pipeDate = new Date();

  createErr() {
    this.error = !this.error;
    this.errorStyle.backgroundColor = this.error ? 'indianred' : 'green';
    this.errorStyle.color = this.error ? 'green' : 'indianred'
  }

  applyForRef(jobReferenceForm: NgForm) {
    console.log(jobReferenceForm.value);
  }

  applyForDataBind(twoForm: NgForm) {
    console.log(this.employee);
    console.log(twoForm);
  }

  autoFill() {
    this.employee.name = 'viva';
    this.employee.position = 'Middle';
    this.employee.gender = 'male';
    this.employee.js = true
  }
}
