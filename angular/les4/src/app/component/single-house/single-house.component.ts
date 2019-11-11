import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-single-house',
  templateUrl: './single-house.component.html',
  styleUrls: ['./single-house.component.css']
})
export class SingleHouseComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private houseService: UserService
  ) {
  }

  onePost;

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.houseService.getSinglePost(params.id).subscribe(onePost => {
        this.onePost = onePost;
      });
    });
    //
    // this.activatedRouter.queryParams.subscribe(queryPar => {
    //   console.log(queryPar);
    // });
  }

}
