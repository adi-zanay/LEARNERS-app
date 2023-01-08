import { Component, OnInit } from '@angular/core';
import { Page1 } from '../pgdetail';
import { Pg3serviceService } from './pg3service.service';
@Component({
  selector: 'app-pg3',
  templateUrl: './pg3.page.html',
  styleUrls: ['./pg3.page.scss'],
})
export class Pg3Page implements OnInit {

  ionic: Page1[]=[];
  constructor(private pg3service: Pg3serviceService) { }

  ngOnInit() {
    this.ionic=this.pg3service.getAllPage();
  }

}
