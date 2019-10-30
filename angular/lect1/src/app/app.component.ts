import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tets: string = 'HELLO FRONT END DEVS';
  inputedValue: string = '';
  status: boolean = false;
  numb: number = 0;


  users = [
    {
      name: 'Victor',
      car: false
    },
    {
      name: 'Dima',
      car: true
    },
    {
      name: 'Ira',
      car: false
    },
    {
      name: 'Oleh',
      car: false
    }
  ]

  mousseClick() {
    console.log('CLICK')
  }

  onInput(ev) {
    this.inputedValue = ev.target.value;
  }

  changeStatus() {
    this.status = !this.status
  }

  incremI() {
    this.numb++
  }
}
