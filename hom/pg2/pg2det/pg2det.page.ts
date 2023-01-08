import { Component, OnInit } from '@angular/core';
import { Page1 } from '../../pgdetail';
import { Pg2serviceService } from '../pg2service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pg2det',
  templateUrl: './pg2det.page.html',
  styleUrls: ['./pg2det.page.scss'],
})
export class Pg2detPage implements OnInit {

  capaci: Page1;
  constructor(
    private capciservice: Pg2serviceService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe(paramMap =>
      {
        if(!paramMap.has('pgid')){return;}
        const pgid = paramMap.get('pgid');
        this.capaci = this.capciservice.getPage(pgid);
      });
  }
}
