import { Component, OnInit } from '@angular/core';
import { Page1 } from '../pgdetail';
import { Pg4serviceService } from './pg4service.service';
@Component({
  selector: 'app-pg4',
  templateUrl: './pg4.page.html',
  styleUrls: ['./pg4.page.scss'],
})
export class Pg4Page implements OnInit {

  angular: Page1[]=[];
  constructor(private pg4service: Pg4serviceService) { }

  ngOnInit() {
    this.angular=this.pg4service.getAllPage();
  }

}
