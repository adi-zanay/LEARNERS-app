import { Component, OnInit } from '@angular/core';
import { Page1 } from '../../pgdetail';
import { Pg3serviceService } from '../pg3service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pg3det',
  templateUrl: './pg3det.page.html',
  styleUrls: ['./pg3det.page.scss'],
})
export class Pg3detPage implements OnInit {

  ioni: Page1;
  constructor(
    private ionicservice: Pg3serviceService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe(paramMap =>
      {
        if(!paramMap.has('pgid')){return;}
        const pgid = paramMap.get('pgid');
        this.ioni = this.ionicservice.getPage(pgid);
      });
  }
}
