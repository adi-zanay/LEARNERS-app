import { Component, OnInit } from '@angular/core';
import { Page1 } from '../../pgdetail';
import { Pg4serviceService } from '../pg4service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pg4det',
  templateUrl: './pg4det.page.html',
  styleUrls: ['./pg4det.page.scss'],
})
export class Pg4detPage implements OnInit {

  angular: Page1;
  constructor(
    private angularservice: Pg4serviceService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe(paramMap =>
      {
        if(!paramMap.has('pgid')){return;}
        const pgid = paramMap.get('pgid');
        this.angular = this.angularservice.getPage(pgid);
      });
  }
}
