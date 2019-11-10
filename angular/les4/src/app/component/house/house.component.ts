import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(
    private houseService: HouseService,
    private router: Router
  ) {
  }

  posts: any[];

  ngOnInit() {
    this.houseService.getPosts().subscribe(allPosts => {
      this.posts = allPosts;
    });
  }

  getFullInfo(id: number) {
    this.router.navigate([`houses/${id}`]);
  }
}
