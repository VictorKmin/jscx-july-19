import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['./house-component.component.css']
})
export class HouseComponentComponent {

  constructor() {
  }

  @Input() house;
  @Output() deleteHouse = new EventEmitter();

  deleteThisHouse() {
    this.deleteHouse.emit(this.house.id);
  }
}
