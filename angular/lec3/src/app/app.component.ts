import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  houses = [
    {color: 'red', owner: 'Dima', id: 0},
    {color: 'white', owner: 'Viktor', id: 1},
    {color: 'pink', owner: 'Vika', id: 2},
    {color: 'yellow', owner: 'Igorko', id: 3},
  ];

  clickHere(houseId: number) {
    console.log(houseId);

    const houseIndex = this.houses.findIndex(house => house.id === houseId)

    this.houses.splice(houseIndex, 1);
  }
}
