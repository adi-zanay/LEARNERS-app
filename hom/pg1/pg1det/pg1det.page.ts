import { Component, OnInit } from '@angular/core';
import { Page1 } from '../../pgdetail';
import { Pg1serviceService } from '../pg1service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pg1det',
  templateUrl: './pg1det.page.html',
  styleUrls: ['./pg1det.page.scss'],
})
export class Pg1detPage implements OnInit {

  react: Page1;
  constructor(
    private reactservice: Pg1serviceService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe(paramMap =>
      {
        if(!paramMap.has('pgid')){return;}
        const pgid = paramMap.get('pgid');
        this.react = this.reactservice.getPage(pgid);
      });
  }

}
