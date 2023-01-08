import { Component, OnInit } from '@angular/core';
import { Page1 } from '../pgdetail';
import { Pg2serviceService } from './pg2service.service';
@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.page.html',
  styleUrls: ['./pg2.page.scss'],
})
export class Pg2Page implements OnInit {

  capacitor: Page1[]=[];
  constructor(private pg2service: Pg2serviceService) { }

  ngOnInit() {
    this.capacitor=this.pg2service.getAllPage();
  }

}
