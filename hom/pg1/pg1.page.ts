import { Component, OnInit } from '@angular/core';
import { Page1 } from '../pgdetail';
import { Pg1serviceService } from './pg1service.service';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.page.html',
  styleUrls: ['./pg1.page.scss'],
})
export class Pg1Page implements OnInit {

  pagee: Page1[]=[];
  constructor(private pgservice: Pg1serviceService) { }

  ngOnInit() {
    this.pagee = this.pgservice.getAllPage();
  }

}
